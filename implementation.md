# PolyReach: Technical Execution Plan

## 1. Data Ingestion
**Goal:** Robust system for CSV/Excel uploads, mapping, validation, and deduplication.

### Recommended Libraries
- Parsing: `multer` (file upload), `csv-parse` or `papaparse` (CSV), `xlsx` or `exceljs` (Excel).
- Validation: `zod` or `joi`.

### Approach
1. **Upload & Parse:** Accept files via a multipart endpoint (`multer`). Parse streams into JSON arrays.
2. **Column Mapping:** Return the parsed headers to the frontend. The user maps file columns (e.g., "First Name") to system fields (`firstName`).
3. **Validation & Deduplication:** Use `zod` to validate emails/URLs. Deduplicate based on a unique identifier (email or LinkedIn URL). Check against existing MongoDB records.

---

## 2. Multi-Channel Connectivity (LinkedIn & WhatsApp)
**Goal:** Automate outreach while avoiding platform bans.

### WhatsApp
- **Approach:** Use the **Official WhatsApp Business API** (via Meta or providers like Twilio/MessageBird). 
- **Pros:** Zero risk of bans if terms are followed, highly reliable.
- **Cons:** Requires Meta approval, cost per conversation, limited promotional messaging without templates.
- **Tools:** `axios` to Meta Graph API, Webhooks for status updates.

### LinkedIn
- **Approach:** Browser Automation using `playwright` or `puppeteer-extra-plugin-stealth` (no official API for direct messaging exists for standard users).
- **Safety Measures (Anti-Ban):**
  - **Proxies:** Assign a dedicated residential IP/proxy for each user.
  - **Human mimicry:** Add random delays (`setTimeout(Math.random() * 5000 + 2000)`), scroll page naturally, simulate typing strokes instead of instant paste.
  - **Limits:** Hardcap outreach limits (e.g., max 30-50 connection requests per day).
- **Local Session Storage:** Store exported session cookies securely to avoid repeated logins.

---

## 3. Personalization Engine
**Goal:** Inject dynamic variables and AI-driven personalization.

### Approach
1. **Template Parsing:** Use libraries like `handlebars` or a simple Regex replacer (`/{{(.*?)}}/g`) for static variables (`{{FirstName}}`).
2. **AI Personalization:**
   - Integrate OpenAI (`openai`) or Google Gemini (`@google/genai`).
   - Prompt Engineering: Extract context from a prospect's LinkedIn bio or recent posts (scraped concurrently) to generate a unique "icebreaker" line.
   - Example prompt: *"You are a sales rep. Write a 2-sentence casual icebreaker based on this prospect's bio: [Bio]."*

---

## 4. Campaign Management
**Goal:** Schedule outreach, stagger sending, and track delivery.

### Recommended Libraries
- Task Queue & Scheduling: `bullmq` powered by Redis. Allows delayed jobs, retries, and rate limiting.

### Approach
1. **Queuing:** When a campaign launches, enqueue a job for each contact in `bullmq` with a calculated delay.
2. **Concurrency & Rate Limiting:** Configure BullMQ to process `X` jobs per hour per user account to mimic human speed.
3. **Tracking:** 
   - Update message status (Pending, Sent, Failed) in the database upon successful Playwright action or WhatsApp API response.
   - For read/reply tracking, use Webhooks (WhatsApp) or scheduled scraping sweeps (LinkedIn inbox checking).

---

## 5. Database Schema (MongoDB / Mongoose)

```javascript
// ContactSchema
const contactSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, sparse: true },
  linkedinUrl: { type: String, unique: true, sparse: true },
  customFields: { type: Map, of: String }
}, { timestamps: true });

// TemplateSchema
const templateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  content: String, // e.g., "Hi {{firstName}}, ..."
  useAI: { type: Boolean, default: false }
}, { timestamps: true });

// CampaignSchema
const campaignSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
  status: { type: String, enum: ['Draft', 'Active', 'Paused', 'Completed'] },
  schedule: {
    startDate: Date,
    dailyLimit: Number,
    workingHours: { start: String, end: String } // e.g. '09:00', '17:00'
  }
}, { timestamps: true });

// CampaignTaskSchema (Track individual message states)
const campaignTaskSchema = new mongoose.Schema({
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  contactId: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  channel: { type: String, enum: ['LinkedIn', 'WhatsApp'] },
  status: { type: String, enum: ['Pending', 'Sent', 'Delivered', 'Read', 'Replied', 'Failed'] },
  scheduledFor: Date,
  executedAt: Date,
  errorLog: String
}, { timestamps: true });
```

---

## 6. Security Best Practices
1. **Credential & Cookie Storage:** LinkedIn session cookies MUST be encrypted at rest using AES-256 (Node's `crypto` module). Never store plain-text passwords or cookies.
2. **Session Security:** Use `express-session` with `connect-mongo`, enforce `HttpOnly` and `Secure` flags for web app authentication, configure strict CORS.
3. **Tenant Isolation:** Enforce `userId` mapping on all queries to guarantee users only access their own lists, campaigns, and templates.

---

## 7. Development Roadmap

- **Phase 1: Foundation (Weeks 1-2)** 
  - Express setup (auth, middleware). 
  - UI for Auth, Dashboard, and File Uploads.
  - Parsing CSV/Excel and saving to MongoDB.
- **Phase 2: Templates & AI (Weeks 3-4)** 
  - Variables mapping and editor UI.
  - OpenAI/Gemini integration for generated icebreakers.
- **Phase 3: Channel Integration (Weeks 5-7)** 
  - Setup Playwright stealth workers for LinkedIn.
  - Integrate Meta WhatsApp API.
- **Phase 4: Campaign Engine (Weeks 8-9)** 
  - Implement Redis + BullMQ. 
  - Build the scheduling logic (working hours, daily caps).
- **Phase 5: Analytics & Polish (Week 10)** 
  - UI dashboards for Campaign statuses, reply rates.
  - Error handling and proxy integration.

---

## 8. Enhanced Ideas (Market Competitiveness)

1. **AI-Driven Intent Scoring:** Analyze replies using an LLM to automatically categorize responses into "Interested," "Not Interested," or "Meeting Booked," shifting hot leads directly to the top of the user's dashboard.
2. **Omnichannel Multi-Step Sequences:** Allow users to build conditional logic: *Send LinkedIn connection -> Wait 2 days -> If no accept, send WhatsApp message -> If accept, send LinkedIn message.*
3. **Native CRM Integrations (HubSpot/Salesforce/Pipedrive):** Build two-way syncs. If a connection accepts a request or replies positively on PolyReach, auto-create a Deal or Lead inside their CRM via OAuth.
4. **A/B Testing Engine:** Allow users to attach multiple templates to a single campaign. The system routes 50/50 traffic and automatically doubles down on the template boasting the highest reply rate.
5. **Smart Inbox / Unified Chat:** Instead of checking WhatsApp and LinkedIn separately, aggregate all replies into a centralized WebSocket-powered chat dashboard inside PolyReach so the sales rep manages all conversations in one UI.
