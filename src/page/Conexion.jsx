import React, { useState } from 'react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-linear-to-br from-[#081525] via-[#111E32] to-[#081525] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#28BD5F]/5 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Back to site link */}
        <a href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors group">
          <svg className="lucide lucide-arrow-left h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="m12 19-7-7 7-7M19 12H5" strokeWidth="2" />
          </svg>
          Retour au site
        </a>

        {/* Card */}
        <div className="bg-[#0B1119]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 text-center border-b border-[#202C3C]">
            <a href="/" className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-2xl bg-[#2D9BD2] flex items-center justify-center shadow-lg shadow-[#2D9BD2]/30">
                <span className="text-white font-bold text-xl font-heading tracking-wider">BL</span>
              </div>
            </a>
            <h1 className="text-xl font-bold text-white font-heading tracking-tight">BENILAB SERVICES</h1>
            <p className="text-xs text-[#7B899D] mt-1 tracking-widest uppercase">KLC NET IT Africa</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#202C3C]">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === 'login' ? 'text-[#2D9BD2] border-b-2 border-[#2D9BD2] bg-[#2D9BD2]/5' : 'text-[#7B899D] hover:text-white'}`}
            >
              Se Connecter
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === 'register' ? 'text-[#2D9BD2] border-b-2 border-[#2D9BD2] bg-[#2D9BD2]/5' : 'text-[#7B899D] hover:text-white'}`}
            >
              S'inscrire
            </button>
          </div>

          {/* Form Content */}
          <div className="px-8 py-7">
            {activeTab === 'login' ? (
              <form className="space-y-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white">Adresse e-mail</label>
                  <div className="relative">
                    <svg className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7z" strokeWidth="2" />
                    </svg>
                    <input
                      className="flex h-9 w-full rounded-md border border-[#202C3C] bg-transparent pl-10 pr-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#7B899D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9BD2]"
                      placeholder="vous@exemple.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white">Mot de passe</label>
                  <div className="relative">
                    <svg className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" strokeWidth="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
                    </svg>
                    <input
                      className="flex h-9 w-full rounded-md border border-[#202C3C] bg-transparent pl-10 pr-10 py-1 text-sm shadow-sm transition-colors placeholder:text-[#7B899D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9BD2]"
                      placeholder="••••••••"
                      required
                      type={showPassword ? 'text' : 'password'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B899D] hover:text-white transition-colors"
                    >
                      <svg className="lucide lucide-eye h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Remember me & Forgot password */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 text-sm text-[#7B899D] cursor-pointer">
                    <input type="checkbox" className="rounded border-[#202C3C]" />
                    Se souvenir de moi
                  </label>
                  <button type="button" className="text-xs text-[#2D9BD2] hover:text-[#2D9BD2]/80 font-medium transition-colors">
                    Mot de passe oublié ?
                  </button>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors px-4 py-2 w-full bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 h-11 gap-2 shadow-md shadow-[#2D9BD2]/20"
                >
                  Se connecter
                </button>

                {/* Register link */}
                <p className="text-center text-sm text-[#7B899D]">
                  Pas encore de compte ?&nbsp;
                  <button
                    type="button"
                    onClick={() => setActiveTab('register')}
                    className="text-[#2D9BD2] font-semibold hover:underline"
                  >
                    S'inscrire gratuitement
                  </button>
                </p>
              </form>
            ) : (
              <form className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white">Nom complet</label>
                  <div className="relative">
                    <svg className="lucide lucide-user absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" strokeWidth="2" />
                      <circle cx="12" cy="7" r="4" strokeWidth="2" />
                    </svg>
                    <input
                      className="flex h-9 w-full rounded-md border border-[#202C3C] bg-transparent pl-10 pr-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#7B899D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9BD2]"
                      placeholder="Jean Dupont"
                      required
                      type="text"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white">Adresse e-mail</label>
                  <div className="relative">
                    <svg className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7z" strokeWidth="2" />
                    </svg>
                    <input
                      className="flex h-9 w-full rounded-md border border-[#202C3C] bg-transparent pl-10 pr-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#7B899D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9BD2]"
                      placeholder="jean@exemple.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white">Téléphone</label>
                  <div className="relative">
                    <svg className="lucide lucide-phone absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" strokeWidth="2" />
                    </svg>
                    <input
                      className="flex h-9 w-full rounded-md border border-[#202C3C] bg-transparent pl-10 pr-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#7B899D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9BD2]"
                      placeholder="+229 95 00 00 00"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white">Mot de passe</label>
                  <div className="relative">
                    <svg className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" strokeWidth="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
                    </svg>
                    <input
                      className="flex h-9 w-full rounded-md border border-[#202C3C] bg-transparent pl-10 pr-10 py-1 text-sm shadow-sm transition-colors placeholder:text-[#7B899D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9BD2]"
                      placeholder="••••••••"
                      required
                      type={showPassword ? 'text' : 'password'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B899D] hover:text-white transition-colors"
                    >
                      <svg className="lucide lucide-eye h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white">Confirmer le mot de passe</label>
                  <div className="relative">
                    <svg className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" strokeWidth="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
                    </svg>
                    <input
                      className="flex h-9 w-full rounded-md border border-[#202C3C] bg-transparent pl-10 pr-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#7B899D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9BD2]"
                      placeholder="••••••••"
                      required
                      type={showPassword ? 'text' : 'password'}
                    />
                  </div>
                </div>

                {/* Terms & Conditions */}
                <label className="flex items-center gap-2 text-sm text-[#7B899D] cursor-pointer">
                  <input type="checkbox" className="rounded border-[#202C3C]" required />
                  J'accepte les{' '}
                  <a href="/conditions" className="text-[#2D9BD2] hover:underline">conditions d'utilisation</a>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors px-4 py-2 w-full bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 h-11 gap-2 shadow-md shadow-[#2D9BD2]/20"
                >
                  S'inscrire gratuitement
                </button>

                {/* Login link */}
                <p className="text-center text-sm text-[#7B899D]">
                  Déjà un compte ?&nbsp;
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-[#2D9BD2] font-semibold hover:underline"
                  >
                    Se connecter
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-xs text-white/40">©&nbsp;2026&nbsp;BENILAB SERVICES — Lokossa, Bénin</p>
          <div className="flex justify-center gap-4">
            <a href="/admin" className="text-xs text-white/40 hover:text-[#2D9BD2] transition-colors">
              Accès Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;