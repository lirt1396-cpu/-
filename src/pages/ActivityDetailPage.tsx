import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Share2, Heart, ArrowLeft, Star, Clock } from 'lucide-react';
import Layout from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';
import { useActivities } from '@/src/context/ActivityContext';

export default function ActivityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { activities, joinedActivityIds, joinActivity, cancelActivity } = useActivities();
  const activity = activities.find(a => a.id === Number(id));

  const isJoined = joinedActivityIds.includes(Number(id));

  const handleJoin = () => {
    joinActivity(Number(id));
    navigate('/success');
  };

  const handleCancel = () => {
    cancelActivity(Number(id));
  };

  if (!activity) {
    return (
      <Layout showBack title="未找到活动">
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <p className="text-secondary mb-6">抱歉，您查看的活动不存在或已被取消。</p>
          <button 
            onClick={() => navigate('/explore')}
            className="px-6 py-2 bg-primary text-on-primary rounded-xl font-bold"
          >
            返回探索
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showBack title="活动详情" hideNav>
      <div className="relative pb-32">
        {/* Hero Image */}
        <div className="relative h-[40vh] w-full overflow-hidden">
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          
          {/* Back Button Overlay */}
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 w-10 h-10 rounded-full glass flex items-center justify-center text-on-background shadow-lg"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Action Buttons Overlay */}
          <div className="absolute top-6 right-6 flex gap-3">
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-on-background shadow-lg">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-on-background shadow-lg">
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 -mt-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-container-lowest rounded-3xl p-8 shadow-xl shadow-on-background/5 border border-outline-variant/10"
          >
            {activity.tag && (
              <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-md text-[10px] font-bold uppercase tracking-widest mb-4">
                {activity.tag}
              </span>
            )}
            
            <h1 className="text-3xl font-black tracking-tight text-on-surface mb-4 leading-tight">
              {activity.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-secondary bg-surface-container-low px-3 py-1.5 rounded-lg">
                <MapPin size={14} />
                <span className="text-xs font-medium">{activity.location}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary bg-surface-container-low px-3 py-1.5 rounded-lg">
                <Users size={14} />
                <span className="text-xs font-medium">{activity.participants} 人已报名</span>
              </div>
            </div>

            {/* Host Info */}
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl mb-8">
              <div className="flex items-center gap-3">
                <img 
                  src={activity.host.avatar} 
                  alt={activity.host.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-surface-container-lowest"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs text-secondary font-medium">发起人</p>
                  <p className="text-sm font-bold text-on-surface">{activity.host.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold">4.9</span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-secondary">
                  <Calendar size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">日期</span>
                </div>
                <p className="text-sm font-bold text-on-surface">{activity.date}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-secondary">
                  <Clock size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">时间</span>
                </div>
                <p className="text-sm font-bold text-on-surface">{activity.time}</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 mb-8">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-widest">关于活动</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>

            {/* Location Preview */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-widest">集合地点</h3>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-40 w-full rounded-2xl overflow-hidden relative"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOdWTqInKFvDmeFLvCa4UQe_0VbZ6S34L-5Efs3I_CPbBkmYUzj5QYp60trsBMS8JBt7C5qtHGeKwThZdpg6ULs9lfPHLU-seNXZAOXQS4x5hnYOl3UGTZJYlxzY1t2_i8bR1Pdb0911Kb98Lt-LeW8PlCCfTga90URyZZXbrxKM17VQa1q6Cpbwl1Akd1VpWSYW-Rx4N9MteglaxGJr6w_Yy1uYDpAZ-i1CC74ykd3KSdfo_bD3gQvjUGBsx2SgL8MSGa9LSvSjFL" 
                  alt="Map" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                    <MapPin size={20} />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Booking Bar */}
      <div className="fixed bottom-0 w-full max-w-md z-50 p-6 glass shadow-[0px_-12px_32px_rgba(24,28,27,0.06)]">
        <div className="flex items-center justify-between gap-6">
          {isJoined ? (
            <button 
              onClick={handleCancel}
              className="flex-grow py-4 bg-error text-on-error rounded-xl font-bold tracking-tight shadow-lg shadow-error/20 hover:opacity-90 transition-all active:scale-[0.98]"
            >
              放弃参加
            </button>
          ) : (
            <button 
              onClick={handleJoin}
              className="flex-grow py-4 bg-primary text-on-primary rounded-xl font-bold tracking-tight shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98]"
            >
              立即报名
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
