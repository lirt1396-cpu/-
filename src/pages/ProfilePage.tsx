import Layout from '@/src/components/Layout';
import { motion } from 'motion/react';
import { Settings, Shield, Bell, HelpCircle, LogOut, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useActivities } from '@/src/context/ActivityContext';
import { useUser } from '@/src/context/UserContext';

const MY_TRIPS = [
  {
    id: 1,
    title: '“温室”晨间流瑜伽',
    date: '4月15日 · 07:30',
    location: '市中心艺术区',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC1Ht--qMT6ANEqe9L1qcI_GQG2H7rT_T0DD29CPslz1FYwLEXq1DTgMM_3tZLNPPX9OBB9xpRR6E9oBv7eHDfbaiDMXvVcvHvRfiL6TASYAJkeZBmHwoI_-UXI9kBaVIpHtmlGzUypNhGdx3QlvfCkPQPqUWjVlLnWK8WiiYWIz_09bwhMsthH5ljjCToKZ9-FOUZ_jn4tUkZigNviSRVh3LnEUrrCJ_ctwEPXchaWbrOt5Epu9QwGxkHtI8WxDCwRISIrWrDdRyl',
  },
  {
    id: 2,
    title: '迷雾之巅徒步',
    date: '4月20日 · 09:00',
    location: '银溪公园',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi5OVF0ScI3GdPlWCNIfQGiUYX1StbfplPa8FzoSH4r-Pl5uWcl6vT8NAlbhoJB-TSgyukj6-u1Ebz742Zxx1OvaUcPtM-t2tJf73folVA4sSWe6HZniNI1akSSSaL-1B949qHXUG4Gjmvy48U6lrTCL3tYX8Z3VrUay-PxxrcbSlNWmJZjNNvMiVKncQa0_ExfR2gd7eIlZjEnRb7nrRcP_SlYDmJs2Fp39Yz1sneND3O3X5d-h9Hu5e8rgML3Uz6HCGZGQQeEPQ0',
  }
];

const FRIENDS = [
  { id: 1, name: 'Sarah Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtj3K5fSgCoi4834uvUFGiw5BDatn4G7tTd0PjBh6_FPY4IkDEtv8fy4hQ408iYzTr1ulaAYSKtBMHCS0_VTWMq0wXu2L2PezJVfZrStlLeEkHccDMqo1tNo9Q6MFuYEwTzo0ZdFooJntIZvLa5SNgnASkOMpVvI2rDkFTLa7rkj5IM8h9lSx4k0OLt4X2Wgk4vSnPE0PVXmhC6b47ffjeZfBfN8_KJfZkIvUFQC3KxupDAkROe8HmI1v7iqNFlzuuluf8JodpEgRL' },
  { id: 2, name: '阿强', avatar: 'https://picsum.photos/seed/hiker/100/100' },
  { id: 3, name: '小雅', avatar: 'https://picsum.photos/seed/reader/100/100' },
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const { activities, joinedActivityIds } = useActivities();
  const { profile } = useUser();

  const joinedActivities = activities.filter(a => joinedActivityIds.includes(a.id));
  const hostedActivities = activities.filter(a => a.host?.name === '林静怡');

  return (
    <Layout title="个人中心">
      <div className="px-6 py-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-10">
          <div 
            className="w-24 h-24 rounded-full bg-surface-container-high overflow-hidden border-4 border-surface-container-lowest shadow-xl mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/avatar-upload')}
          >
            <img 
              src={profile.avatar} 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-2xl font-bold text-on-surface">{profile.nickname}</h2>
          <p className="text-secondary text-sm mb-4">{profile.bio}</p>
          <button 
            onClick={() => navigate('/edit-profile')}
            className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors"
          >
            编辑资料
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <button onClick={() => navigate('/history/joined')} className="bg-surface-container-low p-4 rounded-xl text-center hover:bg-surface-container-high transition-colors">
            <p className="text-xl font-bold text-primary">{joinedActivityIds.length}</p>
            <p className="text-[10px] text-secondary uppercase font-bold tracking-wider">已参加</p>
          </button>
          <button onClick={() => navigate('/history/hosted')} className="bg-surface-container-low p-4 rounded-xl text-center hover:bg-surface-container-high transition-colors">
            <p className="text-xl font-bold text-primary">{hostedActivities.length}</p>
            <p className="text-[10px] text-secondary uppercase font-bold tracking-wider">已发起</p>
          </button>
          <button onClick={() => navigate('/history/saved')} className="bg-surface-container-low p-4 rounded-xl text-center hover:bg-surface-container-high transition-colors">
            <p className="text-xl font-bold text-primary">0</p>
            <p className="text-[10px] text-secondary uppercase font-bold tracking-wider">收藏</p>
          </button>
        </div>

        {/* My Friends Section */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-black text-on-surface tracking-tight">我的好友</h3>
            <button onClick={() => navigate('/friends')} className="text-xs font-bold text-primary uppercase tracking-widest">管理</button>
          </div>
          <div className="flex gap-4">
            {FRIENDS.map((friend) => (
              <div key={friend.id} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => navigate(`/friend/${friend.id}`)}>
                <div className="w-14 h-14 rounded-full bg-surface-container-high overflow-hidden">
                  <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-medium text-secondary">{friend.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-black text-on-surface tracking-tight">我的行程</h3>
            <button onClick={() => navigate('/history/joined')} className="text-xs font-bold text-primary uppercase tracking-widest">全部</button>
          </div>
          <div className="space-y-4">
            {joinedActivities.length > 0 ? joinedActivities.map((trip, i) => (
              <Link key={trip.id} to={`/activity/${trip.id}`} className="block">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
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
                        <span className="text-[10px] font-medium">{trip.date || trip.time}</span>
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
              </Link>
            )) : (
              <div className="text-center py-8 bg-surface-container-low rounded-2xl">
                <p className="text-secondary text-sm">暂无行程，去探索看看吧</p>
              </div>
            )}
          </div>
        </section>

        {/* Menu */}
        <div className="space-y-2">
          {[
            { icon: Settings, label: '账户设置', path: '/settings' },
            { icon: Shield, label: '隐私与安全', path: '/privacy' },
            { icon: Bell, label: '通知管理', path: '/notifications-settings' },
            { icon: HelpCircle, label: '帮助中心', path: '/help' },
          ].map((item, i) => (
            <motion.button 
              key={item.label}
              whileHover={{ x: 4 }}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <item.icon size={20} className="text-secondary" />
                </div>
                <span className="font-medium text-on-surface">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-outline" />
            </motion.button>
          ))}
          
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 p-4 text-error mt-6 hover:bg-error/5 rounded-xl transition-colors">
            <div className="p-2 bg-error/10 rounded-lg">
              <LogOut size={20} />
            </div>
            <span className="font-medium">退出登录</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
