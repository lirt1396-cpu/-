import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import Layout from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';
import { useActivities } from '@/src/context/ActivityContext';

const MY_JOINED_TRIPS = [
  {
    id: 101,
    title: '“温室”晨间流瑜伽',
    date: '4月15日 · 07:30',
    location: '市中心艺术区',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC1Ht--qMT6ANEqe9L1qcI_GQG2H7rT_T0DD29CPslz1FYwLEXq1DTgMM_3tZLNPPX9OBB9xpRR6E9oBv7eHDfbaiDMXvVcvHvRfiL6TASYAJkeZBmHwoI_-UXI9kBaVIpHtmlGzUypNhGdx3QlvfCkPQPqUWjVlLnWK8WiiYWIz_09bwhMsthH5ljjCToKZ9-FOUZ_jn4tUkZigNviSRVh3LnEUrrCJ_ctwEPXchaWbrOt5Epu9QwGxkHtI8WxDCwRISIrWrDdRyl',
  },
  {
    id: 102,
    title: '迷雾之巅徒步',
    date: '4月20日 · 09:00',
    location: '银溪公园',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi5OVF0ScI3GdPlWCNIfQGiUYX1StbfplPa8FzoSH4r-Pl5uWcl6vT8NAlbhoJB-TSgyukj6-u1Ebz742Zxx1OvaUcPtM-t2tJf73folVA4sSWe6HZniNI1akSSSaL-1B949qHXUG4Gjmvy48U6lrTCL3tYX8Z3VrUay-PxxrcbSlNWmJZjNNvMiVKncQa0_ExfR2gd7eIlZjEnRb7nrRcP_SlYDmJs2Fp39Yz1sneND3O3X5d-h9Hu5e8rgML3Uz6HCGZGQQeEPQ0',
  }
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<'joined' | 'initiated'>('joined');
  const { activities } = useActivities();
  
  // Filter activities initiated by the current user (mocked as '林静怡')
  const initiatedActivities = activities.filter(a => a.host?.name === '林静怡');

  return (
    <Layout title="消息与行程" showBack>
      <div className="px-6 py-4">
        {/* Tabs */}
        <div className="flex bg-surface-container-low p-1 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('joined')}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
              activeTab === 'joined' ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-secondary hover:text-on-surface"
            )}
          >
            我参加的
          </button>
          <button
            onClick={() => setActiveTab('initiated')}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
              activeTab === 'initiated' ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-secondary hover:text-on-surface"
            )}
          >
            我发起的
          </button>
        </div>

        {/* List */}
        <div className="space-y-4">
          {activeTab === 'joined' && MY_JOINED_TRIPS.map((trip, i) => (
            <motion.div 
              key={trip.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-4 bg-surface-container-low rounded-2xl group cursor-pointer hover:bg-surface-container-high transition-colors"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <h4 className="font-bold text-on-surface text-sm mb-2 line-clamp-1">{trip.title}</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-secondary">
                    <Calendar size={12} />
                    <span className="text-[10px] font-medium">{trip.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <MapPin size={12} />
                    <span className="text-[10px] font-medium">{trip.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center pr-2">
                <ChevronRight size={16} className="text-outline" />
              </div>
            </motion.div>
          ))}

          {activeTab === 'initiated' && initiatedActivities.length === 0 && (
            <div className="text-center py-12 text-secondary text-sm">
              暂无发起的活动
            </div>
          )}

          {activeTab === 'initiated' && initiatedActivities.map((activity, i) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-4 bg-surface-container-low rounded-2xl group cursor-pointer hover:bg-surface-container-high transition-colors"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <h4 className="font-bold text-on-surface text-sm mb-2 line-clamp-1">{activity.title}</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-secondary">
                    <Calendar size={12} />
                    <span className="text-[10px] font-medium">{activity.date || '待定'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <MapPin size={12} />
                    <span className="text-[10px] font-medium">{activity.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center pr-2">
                <ChevronRight size={16} className="text-outline" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
