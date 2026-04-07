import Layout from '@/src/components/Layout';
import { Users, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InviteFriendsPage() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://app.quietconcierge.com/join/12345');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout title="邀请好友" showBack>
      <div className="px-6 py-8 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-6">
          <Users size={40} className="text-on-secondary-container" />
        </div>
        <h2 className="text-2xl font-black text-on-surface mb-2">活动已创建</h2>
        <p className="text-secondary mb-8">这是一个私人活动，只有通过链接才能加入。</p>
        
        <div className="w-full bg-surface-container-low p-4 rounded-xl flex items-center justify-between mb-8">
          <span className="text-sm font-mono text-on-surface-variant truncate">https://app.quietconcierge.com/join/12345</span>
          <button onClick={handleCopy} className="text-primary hover:text-primary-container transition-colors">
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>

        <button 
          onClick={() => navigate('/explore')}
          className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
        >
          返回探索页
        </button>
      </div>
    </Layout>
  );
}
