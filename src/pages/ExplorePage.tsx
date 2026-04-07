import { Search, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Layout from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';
import { useActivities } from '@/src/context/ActivityContext';

const CATEGORIES = ['所有活动'];

export default function ExplorePage() {
  const { activities } = useActivities();

  return (
    <Layout title="探索">
      <div className="px-6 py-4">
        {/* Search */}
        <section className="mb-10">
          <div className="flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                <Search size={20} />
              </div>
              <input 
                className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" 
                placeholder="寻找你的下一次冒险..." 
                type="text"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-6 px-6">
              {CATEGORIES.map((cat, i) => (
                <button 
                  key={cat}
                  className={cn(
                    "whitespace-nowrap px-6 py-2 rounded-md text-sm font-medium transition-all",
                    i === 0 ? "bg-primary text-on-primary shadow-sm" : "bg-surface-container-low text-secondary hover:bg-surface-container-high"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-12">
          {activities.map((activity, index) => (
            <Link key={activity.id} to={`/activity/${activity.id}`}>
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group cursor-pointer",
                  activity.isSocial && "bg-surface-container-low rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center"
                )}
              >
                <div className={cn(
                  "relative overflow-hidden rounded-xl",
                  activity.isSocial ? "w-full md:w-1/3 aspect-[4/3]" : "aspect-[16/10] mb-6"
                )}>
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={activity.image} 
                    alt={activity.title}
                    referrerPolicy="no-referrer"
                  />
                  {activity.tag && (
                    <div className="absolute top-4 left-4 bg-surface-bright/70 backdrop-blur-md px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest text-primary">
                      {activity.tag}
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      {activity.isSocial && <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-1 block">新社交</span>}
                      <h2 className={cn(
                        "font-black tracking-tight text-on-surface leading-tight",
                        activity.featured ? "text-3xl max-w-[70%]" : "text-xl"
                      )}>
                        {activity.title}
                      </h2>
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-md text-xs font-bold",
                      activity.color === 'tertiary' ? "bg-tertiary-container text-on-tertiary-container" : "bg-secondary-container text-on-secondary-container"
                    )}>
                      {activity.participants}人已报名
                    </span>
                  </div>
                  {activity.description && (
                    <p className="text-on-surface-variant text-sm line-clamp-2 italic">{activity.description}</p>
                  )}
                  <div className="flex items-center gap-2 text-secondary">
                    <MapPin size={14} />
                    <span className="text-sm font-medium">{activity.location}</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
