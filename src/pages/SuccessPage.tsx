import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/src/components/Layout';

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <Layout title="报名成功" hideNav>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-black tracking-tight text-on-surface mb-4">报名成功！</h1>
          <p className="text-on-surface-variant mb-12 leading-relaxed">
            您的席位已预留。我们已将确认信息发送至您的邮箱，期待与您在活动中相见。
          </p>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-surface-container-low rounded-2xl p-6 mb-12 text-left space-y-4"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-surface-container-lowest rounded-lg text-primary">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">活动时间</p>
              <p className="text-sm font-bold text-on-surface">2024年4月15日 · 07:30</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-surface-container-lowest rounded-lg text-primary">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">集合地点</p>
              <p className="text-sm font-bold text-on-surface">市中心艺术区 · 玻璃温室</p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full space-y-4"
        >
          <button 
            onClick={() => navigate('/explore')}
            className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold tracking-tight shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span>发现更多活动</span>
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="w-full py-4 text-secondary font-medium hover:text-primary transition-colors"
          >
            查看我的行程
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
