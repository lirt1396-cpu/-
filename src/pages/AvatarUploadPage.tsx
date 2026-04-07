import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/src/components/Layout';
import { Upload, Camera } from 'lucide-react';
import { useUser } from '@/src/context/UserContext';

export default function AvatarUploadPage() {
  const navigate = useNavigate();
  const { profile, setProfile } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(profile.avatar);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (preview) {
      setProfile({ ...profile, avatar: preview });
    }
    navigate('/profile');
  };

  return (
    <Layout title="修改头像" showBack>
      <div className="px-6 py-12 flex flex-col items-center">
        <div 
          className="w-40 h-40 rounded-full bg-surface-container-high overflow-hidden border-4 border-surface-container-lowest shadow-xl mb-8 relative group cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {preview ? (
            <img src={preview} alt="Preview" className="w-full h-full object-cover block" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-surface-container-low text-secondary">
              <Camera size={48} />
            </div>
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Upload className="text-white" size={32} />
          </div>
        </div>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/*" 
          className="hidden" 
        />

        <button 
          onClick={handleSave}
          className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:opacity-90 transition-all"
        >
          保存头像
        </button>
      </div>
    </Layout>
  );
}
