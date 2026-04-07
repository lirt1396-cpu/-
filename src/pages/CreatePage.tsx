import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Map as MapIcon, Minus, Plus, Globe, Send, Lock, Upload, Camera } from 'lucide-react';
import Layout from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';
import { useActivities } from '@/src/context/ActivityContext';

export default function CreatePage() {
  const navigate = useNavigate();
  const { addActivity } = useActivities();
  const [participants, setParticipants] = useState(4);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState(new Date().toISOString().slice(0, 16));
  const [privacy, setPrivacy] = useState<'public' | 'private'>('public');
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    if (!title.trim() || !location.trim()) {
      alert('请填写活动名称和地点');
      return;
    }

    const newActivity = {
      id: Date.now(),
      title,
      location,
      image: image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdWTqInKFvDmeFLvCa4UQe_0VbZ6S34L-5Efs3I_CPbBkmYUzj5QYp60trsBMS8JBt7C5qtHGeKwThZdpg6ULs9lfPHLU-seNXZAOXQS4x5hnYOl3UGTZJYlxzY1t2_i8bR1Pdb0911Kb98Lt-LeW8PlCCfTga90URyZZXbrxKM17VQa1q6Cpbwl1Akd1VpWSYW-Rx4N9MteglaxGJr6w_Yy1uYDpAZ-i1CC74ykd3KSdfo_bD3gQvjUGBsx2SgL8MSGa9LSvSjFL',
      participants: `1/${participants}`,
      tag: '新发布',
      isSocial: true,
      description: '这是您新创建的活动。',
      date: '即将开始',
      time,
      host: {
        name: '林静怡',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtj3K5fSgCoi4834uvUFGiw5BDatn4G7tTd0PjBh6_FPY4IkDEtv8fy4hQ408iYzTr1ulaAYSKtBMHCS0_VTWMq0wXu2L2PezJVfZrStlLeEkHccDMqo1tNo9Q6MFuYEwTzo0ZdFooJntIZvLa5SNgnASkOMpVvI2rDkFTLa7rkj5IM8h9lSx4k0OLt4X2Wgk4vSnPE0PVXmhC6b47ffjeZfBfN8_KJfZkIvUFQC3KxupDAkROe8HmI1v7iqNFlzuuluf8JodpEgRL'
      }
    };

    addActivity(newActivity);
    if (privacy === 'private') {
      navigate('/invite');
    } else {
      navigate('/publish-success');
    }
  };

  return (
    <Layout title="创建活动" showBack>
      <div className="px-6 py-8">
        {/* Hero Section */}
        <header className="mb-12">
          <p className="text-secondary font-medium tracking-wider mb-2 text-sm uppercase">开启新体验</p>
          <h2 className="text-4xl font-black text-on-surface tracking-tight leading-tight">
            策划你的 <br/>
            <span className="text-primary">下一场冒险。</span>
          </h2>
        </header>

        {/* Form */}
        <div className="space-y-10">
          {/* Activity Image */}
          <div className="group">
            <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-3 px-1">活动封面</label>
            <div 
              className="w-full h-48 bg-surface-container-low rounded-xl flex items-center justify-center border-2 border-dashed border-outline-variant cursor-pointer hover:border-primary transition-colors overflow-hidden relative"
              onClick={() => fileInputRef.current?.click()}
            >
              {image ? (
                <img src={image} alt="Activity" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <div className="flex flex-col items-center text-secondary">
                  <Camera size={32} className="mb-2" />
                  <span className="text-sm font-medium">点击上传封面</span>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>
          </div>

          {/* Activity Name and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-3 px-1" htmlFor="activity-name">活动名称</label>
              <input 
                className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
                id="activity-name" 
                placeholder="例如：清晨森林冥想" 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-3 px-1" htmlFor="activity-datetime">活动日期与时间</label>
              <input 
                className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
                id="activity-datetime" 
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>


          {/* Location */}
          <div className="group">
            <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-3 px-1" htmlFor="location">地点</label>
            <div className="relative mb-4">
              <input 
                className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
                id="location" 
                placeholder="搜索目的地..." 
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
            </div>
            
            {/* Map Preview */}
            <div className="h-48 w-full rounded-xl overflow-hidden relative group/map cursor-pointer">
              <img 
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOdWTqInKFvDmeFLvCa4UQe_0VbZ6S34L-5Efs3I_CPbBkmYUzj5QYp60trsBMS8JBt7C5qtHGeKwThZdpg6ULs9lfPHLU-seNXZAOXQS4x5hnYOl3UGTZJYlxzY1t2_i8bR1Pdb0911Kb98Lt-LeW8PlCCfTga90URyZZXbrxKM17VQa1q6Cpbwl1Akd1VpWSYW-Rx4N9MteglaxGJr6w_Yy1uYDpAZ-i1CC74ykd3KSdfo_bD3gQvjUGBsx2SgL8MSGa9LSvSjFL" 
                alt="Map preview"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 glass bg-surface-container-lowest/80 px-3 py-1.5 rounded-lg flex items-center gap-2">
                <MapIcon size={14} />
                <span className="text-xs font-medium">在地图上选择</span>
              </div>
            </div>
          </div>

          {/* Details Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Participants */}
            <div className="p-6 bg-surface-container-low rounded-xl">
              <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-4">参与人数</label>
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setParticipants(Math.max(1, participants - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  <Minus size={20} />
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-on-surface">{participants.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] text-secondary font-medium">最大人数</span>
                </div>
                <button 
                  onClick={() => setParticipants(participants + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Privacy */}
            <div className="p-6 bg-surface-container-low rounded-xl flex flex-col justify-between">
              <label className="block text-xs font-semibold text-secondary uppercase tracking-widest mb-4">可见范围</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPrivacy('public')}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 p-3 rounded-lg transition-all",
                    privacy === 'public' ? "bg-primary text-on-primary" : "bg-surface-container-lowest text-secondary hover:bg-surface-container-high"
                  )}
                >
                  <Globe size={16} />
                  <span className="text-sm font-bold">公开</span>
                </button>
                <button
                  onClick={() => setPrivacy('private')}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 p-3 rounded-lg transition-all",
                    privacy === 'private' ? "bg-primary text-on-primary" : "bg-surface-container-lowest text-secondary hover:bg-surface-container-high"
                  )}
                >
                  <Lock size={16} />
                  <span className="text-sm font-bold">私人</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <button 
            onClick={handlePublish}
            className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold tracking-tight shadow-lg shadow-primary/10 hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <span>发布活动</span>
            <Send size={18} />
          </button>
          <button className="text-secondary font-medium text-sm hover:text-primary transition-colors">
            保存为草稿
          </button>
        </div>
      </div>
    </Layout>
  );
}
