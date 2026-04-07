import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Share2, Eye } from 'lucide-react';
import Layout from '@/src/components/Layout';

export default function PublishSuccessPage() {
  const navigate = useNavigate();

  return (
    <Layout title="发布成功" hideNav>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8"
        >
          <Sparkles size={48} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-black tracking-tight text-on-surface mb-4">活动已发布！</h1>
          <p className="text-on-surface-variant mb-12 leading-relaxed">
            您的新冒险已准备就绪。它现在对社区可见，快去邀请您的朋友加入吧！
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="w-full grid grid-cols-1 gap-4 mb-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between p-6 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-surface-container-lowest rounded-lg text-primary">
                <Share2 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">分享活动</p>
                <p className="text-[10px] text-secondary font-medium">通过社交平台邀请好友</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-outline" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => navigate('/explore')}
            className="flex items-center justify-between p-6 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-surface-container-lowest rounded-lg text-primary">
                <Eye size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">预览活动</p>
                <p className="text-[10px] text-secondary font-medium">查看活动在探索页的展示</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-outline" />
          </motion.button>
        </div>

        {/* Primary Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full"
        >
          <button 
            onClick={() => navigate('/explore')}
            className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold tracking-tight shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span>返回探索</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
