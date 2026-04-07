import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Activity {
  id: number;
  title: string;
  location: string;
  image: string;
  participants: string;
  tag?: string;
  featured?: boolean;
  color?: string;
  description?: string;
  isSocial?: boolean;
  price?: string;
  time?: string;
  date?: string;
  host?: {
    name: string;
    avatar: string;
  };
}

const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: '“温室”晨间流瑜伽',
    location: '市中心艺术区',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC1Ht--qMT6ANEqe9L1qcI_GQG2H7rT_T0DD29CPslz1FYwLEXq1DTgMM_3tZLNPPX9OBB9xpRR6E9oBv7eHDfbaiDMXvVcvHvRfiL6TASYAJkeZBmHwoI_-UXI9kBaVIpHtmlGzUypNhGdx3QlvfCkPQPqUWjVlLnWK8WiiYWIz_09bwhMsthH5ljjCToKZ9-FOUZ_jn4tUkZigNviSRVh3LnEUrrCJ_ctwEPXchaWbrOt5Epu9QwGxkHtI8WxDCwRISIrWrDdRyl',
    participants: '5/10',
    tag: '余位不多',
    featured: true,
    description: '在被绿植环绕的透明温室中，开启一场与身心的深度对话。清晨的阳光透过玻璃洒在瑜伽垫上，伴随着轻柔的自然音效，我们将进行60分钟的流瑜伽练习，旨在唤醒身体能量，提升专注力。',
    price: '¥128',
    time: '07:30 - 08:30',
    date: '2024年4月15日',
    host: {
      name: 'Sarah Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtj3K5fSgCoi4834uvUFGiw5BDatn4G7tTd0PjBh6_FPY4IkDEtv8fy4hQ408iYzTr1ulaAYSKtBMHCS0_VTWMq0wXu2L2PezJVfZrStlLeEkHccDMqo1tNo9Q6MFuYEwTzo0ZdFooJntIZvLa5SNgnASkOMpVvI2rDkFTLa7rkj5IM8h9lSx4k0OLt4X2Wgk4vSnPE0PVXmhC6b47ffjeZfBfN8_KJfZkIvUFQC3KxupDAkROe8HmI1v7iqNFlzuuluf8JodpEgRL'
    }
  },
  {
    id: 2,
    title: '迷雾之巅徒步',
    location: '银溪公园',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi5OVF0ScI3GdPlWCNIfQGiUYX1StbfplPa8FzoSH4r-Pl5uWcl6vT8NAlbhoJB-TSgyukj6-u1Ebz742Zxx1OvaUcPtM-t2tJf73folVA4sSWe6HZniNI1akSSSaL-1B949qHXUG4Gjmvy48U6lrTCL3tYX8Z3VrUay-PxxrcbSlNWmJZjNNvMiVKncQa0_ExfR2gd7eIlZjEnRb7nrRcP_SlYDmJs2Fp39Yz1sneND3O3X5d-h9Hu5e8rgML3Uz6HCGZGQQeEPQ0',
    participants: '8/12',
    featured: false,
    description: '这是一场挑战与美景并存的徒步之旅。我们将攀登银溪公园的最高峰，在云雾缭绕中俯瞰整座城市的苏醒。全程约8公里，适合有一定户外经验的爱好者。',
    price: '免费',
    time: '06:00 - 11:00',
    date: '2024年4月20日',
    host: {
      name: '阿强',
      avatar: 'https://picsum.photos/seed/hiker/100/100'
    }
  },
  {
    id: 3,
    title: '手工陶艺拉坯工坊',
    location: '泥与火工作室',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYY8ujp5F2VFQSZxoMZSTYMqTPS0kWdZCWFGPIVgZqjrbjs76pYmInN7cwNHtmXg9005MBOmHZYj-WGkr51loMDN8_2pHKYrkgOMR4HfIx_1JfPV2PXwkqwwzXNyP8gNIlvsZs8-jwN84X-H6VFTjVkyBpkNEH9M_SXsYARyDNsOa0kbeHAmorSOaDtCsIHaYCrmbNvm3es4cP4M5uvI0SIIpRonEyW50aEakIcnDLI6a2NqLm3Wk7N5f_xka3Ou4fnMq1JDUa7BXH',
    participants: '2/4',
    featured: false,
    color: 'tertiary',
    description: '感受泥土在指尖流动的温度。在资深陶艺师的指导下，学习拉坯基础技巧，亲手制作一件属于自己的器物。包含一次烧制费用。',
    price: '¥260',
    time: '14:00 - 16:30',
    date: '2024年4月18日',
    host: {
      name: '老张',
      avatar: 'https://picsum.photos/seed/potter/100/100'
    }
  },
  {
    id: 4,
    title: '深夜读书会',
    location: '丝绒角书屋',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjvvhetSuEwOyNRQu8FP0xVL90KvkG70STFg7PfyVKDXE45pXcw2T8w4p-5uSgdvCTIfHU1TbZapWWU7FgFk8dN-E6LL1omucqyik8bwpMdJnHEuzUbNnGQWMPLNAYPK2CXJd-__3xzYzFDicLdO6kZnsjdhsP8fE9-2wF6IFQ7CUw2f9P0UXB6HmIoVrduSQO5PLKrBRqG5iFwVFshfN9JLQfN1JvNXHDXV8lSVFMs_ugVurcrmG3sJJUJoKRi0MbCNIbRMZSBeF5',
    participants: '12/15',
    featured: false,
    description: '在舒缓的爵士乐与手工茶饮中，为爱书之人提供一处安静阅读与交流的港湾。本期主题：存在主义文学。',
    isSocial: true,
    price: '¥45',
    time: '21:00 - 23:00',
    date: '2024年4月22日',
    host: {
      name: '小雅',
      avatar: 'https://picsum.photos/seed/reader/100/100'
    }
  }
];

interface ActivityContextType {
  activities: Activity[];
  joinedActivityIds: number[];
  addActivity: (activity: Activity) => void;
  joinActivity: (id: number) => void;
  cancelActivity: (id: number) => void;
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

export function ActivityProvider({ children }: { children: ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>(INITIAL_ACTIVITIES);
  const [joinedActivityIds, setJoinedActivityIds] = useState<number[]>([]);

  const addActivity = (activity: Activity) => {
    setActivities(prev => [activity, ...prev]);
  };

  const joinActivity = (id: number) => {
    setJoinedActivityIds(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
    
    // Update participant count in activities list
    setActivities(prev => prev.map(activity => {
      if (activity.id === id) {
        const [current, max] = activity.participants.split('/').map(Number);
        return { ...activity, participants: `${current + 1}/${max}` };
      }
      return activity;
    }));
  };

  const cancelActivity = (id: number) => {
    setJoinedActivityIds(prev => prev.filter(joinedId => joinedId !== id));
    
    // Update participant count in activities list
    setActivities(prev => prev.map(activity => {
      if (activity.id === id) {
        const [current, max] = activity.participants.split('/').map(Number);
        return { ...activity, participants: `${Math.max(0, current - 1)}/${max}` };
      }
      return activity;
    }));
  };

  return (
    <ActivityContext.Provider value={{ activities, joinedActivityIds, addActivity, joinActivity, cancelActivity }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivities() {
  const context = useContext(ActivityContext);
  if (context === undefined) {
    throw new Error('useActivities must be used within an ActivityProvider');
  }
  return context;
}
