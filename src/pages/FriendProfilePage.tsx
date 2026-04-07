import { useParams } from 'react-router-dom';
import Layout from '@/src/components/Layout';
import { useActivities } from '@/src/context/ActivityContext';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const FRIENDS_MAP: Record<string, string> = {
  '1': 'Sarah Chen',
  '2': '阿强',
  '3': '小雅',
};

export default function FriendProfilePage() {
  const { id } = useParams();
  const { activities } = useActivities();
  
  const friendName = id ? FRIENDS_MAP[id] : '未知好友';
  
  // Filter activities by host name
  const friendActivities = activities.filter(a => a.host?.name === friendName);

  return (
    <Layout title={friendName} showBack>
      <div className="px-6 py-8">
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full bg-surface-container-high overflow-hidden border-4 border-surface-container-lowest shadow-xl mb-4">
            <img 
              src={`https://picsum.photos/seed/${id}/200/200`} 
              alt={friendName} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-2xl font-bold text-on-surface">{friendName}</h2>
          <p className="text-secondary text-sm">探索者 · 活跃用户</p>
        </div>

        <h3 className="text-lg font-black text-on-surface mb-4 tracking-tight">发布的活动</h3>
        {friendActivities.length > 0 ? (
          <div className="space-y-4">
            {friendActivities.map((activity, i) => (
              <motion.div 
                key={activity.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-surface-container-low rounded-2xl"
              >
                <h4 className="font-bold text-on-surface mb-2">{activity.title}</h4>
                <div className="flex items-center gap-4 text-secondary text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-secondary text-sm">该好友暂未发布活动。</p>
        )}
      </div>
    </Layout>
  );
}
