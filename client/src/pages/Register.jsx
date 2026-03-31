import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white">Create an account</h2>
        <p className="text-sm text-slate-400 mt-1">Start automating your outreach</p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-slate-300">
              First name
            </label>
            <div className="mt-1.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none block w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg shadow-sm placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 hover:border-slate-600 hover:bg-slate-900"
                placeholder="John"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-slate-300">
              Last name
            </label>
            <div className="mt-1.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none block w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg shadow-sm placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 hover:border-slate-600 hover:bg-slate-900"
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email address
          </label>
          <div className="mt-1.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg shadow-sm placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 hover:border-slate-600 hover:bg-slate-900"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-300">
            Password
          </label>
          <div className="mt-1.5">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg shadow-sm placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 hover:border-slate-600 hover:bg-slate-900"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-300">
            Confirm Password
          </label>
          <div className="mt-1.5">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="appearance-none block w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg shadow-sm placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200 hover:border-slate-600 hover:bg-slate-900"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-slate-900 text-slate-400">Already have an account?</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Log in instead
          </Link>
        </div>
      </div>
    </div>
  );
}
