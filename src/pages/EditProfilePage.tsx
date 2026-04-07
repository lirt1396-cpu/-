import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/src/components/Layout';
import { useUser } from '@/src/context/UserContext';

export default function EditProfilePage() {
  const navigate = useNavigate();
  const { profile, setProfile } = useUser();
  const [nickname, setNickname] = useState(profile.nickname);
  const [bio, setBio] = useState(profile.bio);

  const handleSave = () => {
    setProfile({ nickname, bio });
    navigate('/profile');
  };

  return (
    <Layout title="编辑资料" showBack>
      <div className="px-6 py-8 space-y-6">
        <div className="group">
          <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-3 px-1" htmlFor="nickname">昵称</label>
          <input 
            className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
            id="nickname" 
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="group">
          <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-3 px-1" htmlFor="bio">个人简介</label>
          <textarea 
            className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
            id="bio" 
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:opacity-90 transition-all"
        >
          保存修改
        </button>
      </div>
    </Layout>
  );
}
