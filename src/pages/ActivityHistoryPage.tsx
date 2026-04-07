import Layout from '@/src/components/Layout';
import { useActivities } from '@/src/context/ActivityContext';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

export default function ActivityHistoryPage() {
  const { type } = useParams();
  const { activities, joinedActivityIds } = useActivities();

  const title = type === 'joined' ? '已参加活动' : type === 'hosted' ? '已发起活动' : '收藏活动';

  // Real filtering logic
  const filteredActivities = activities.filter((activity) => {
    if (type === 'joined') return joinedActivityIds.includes(activity.id);
    // For hosted, we could check if host name matches user name, but for now keep it simple or mock
    if (type === 'hosted') return activity.host?.name === '林静怡'; 
    return false; // For favorites, we'd need another context state
  });

  return (
    <Layout title={title} showBack>
      <div className="px-6 py-8">
        <div className="space-y-4">
          {filteredActivities.map(activity => (
            <div key={activity.id} className="p-4 bg-surface-container-low rounded-2xl">
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
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
