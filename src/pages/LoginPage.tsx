import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-2xl"></div>
      </div>

      <main className="flex-grow flex items-center justify-center p-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          {/* Branding */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(24,28,27,0.04)] mb-8">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                </motion.div>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-on-surface mb-2 font-headline">活动管家</h1>
            <p className="text-on-surface-variant text-sm tracking-wide">为您策划下一次避世之旅</p>
          </div>

          {/* Login Card */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_12px_32px_rgba(24,28,27,0.06)] border border-outline-variant/10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-secondary ml-1" htmlFor="email">电子邮件地址</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-semibold uppercase tracking-widest text-secondary" htmlFor="password">密码</label>
                  <button type="button" className="text-xs font-medium text-primary hover:opacity-70 transition-opacity">忘记密码？</button>
                </div>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button 
                className="w-full py-4 bg-primary text-on-primary font-semibold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-md shadow-primary/20 flex items-center justify-center gap-2 group" 
                type="submit"
              >
                <span>登录</span>
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/20"></div>
              </div>
              <span className="relative bg-surface-container-lowest px-4 text-xs font-medium text-on-surface-variant uppercase tracking-widest">或通过以下方式继续</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low text-on-surface font-medium rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/10">
                <span className="text-sm">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low text-on-surface font-medium rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/10">
                <span className="text-sm">Apple</span>
              </button>
            </div>
          </div>

          <p className="text-center mt-8 text-on-surface-variant text-sm">
            还没有账号？ 
            <button className="text-primary font-bold ml-1 hover:underline underline-offset-4">立即注册</button>
          </p>
        </motion.div>
      </main>

      <footer className="p-6 text-center text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50 font-medium z-10">
        <div className="flex justify-center gap-6 mb-2">
          <button className="hover:text-primary transition-colors">隐私政策</button>
          <button className="hover:text-primary transition-colors">服务条款</button>
          <button className="hover:text-primary transition-colors">客户支持</button>
        </div>
        <p>© 2024 活动管家 (THE ACTIVITY CONCIERGE)</p>
      </footer>

      {/* Decorative Images */}
      <div className="hidden lg:block absolute bottom-12 -left-20 w-80 h-96 transform -rotate-6 opacity-40">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd9qU4ZlVzRLKk690pnWWG6BZJ0yYzaV8XSQzz2aOZRI4ZwYUxEJCCYRLM0Ttxv2MYIxm8Bvx7x6MpsZ5QfRjZnqqy6B5jMSjkcx56Om4-L80IBiufOVp0e6ecojc4udGcmy7RVxkyCy78nKcN25Qg-IQ9YVWExgaWlqh7iHfrqV2IAW8ckJLpisGxoaZYlnr1FT9H6XwLI-uAuB9uf6UqXaWVp0pv-iPBZc_s03iZCpAI503l7Dc4QmmEYGR6HRtRnmQrUqrgUmk4" 
          alt="Minimalist landscape" 
          className="w-full h-full object-cover rounded-3xl"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="hidden lg:block absolute -top-12 -right-20 w-72 h-80 transform rotate-12 opacity-40">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFZWU9BymUrNVbZu15BgdKI9wb_RVSi8_BhT6gt5gzPMUec6CsBnw4UlwG-Zm5O8FXSA1Ex0wpH7qgiGfDJFeoZ8bQjY1QGWYe0kUSmg9X8rjGFeMWiz-Wi5zJIMmZGA4GqADpMpKsPtOXLyHBbr62aEc-CoTWzrG7BgvbcVVaWg0O42o-Z1950rdgIKH7GZbPgY51kXX5aK7aG3s3PL_lJlTAoHf5A7xdmTpqkV0rvO1b9NCt-XS3elquokVZ8-3vTGG-55KIjfE_" 
          alt="Abstract texture" 
          className="w-full h-full object-cover rounded-3xl"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
