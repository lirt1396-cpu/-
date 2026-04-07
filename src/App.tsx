import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage';
import ActivityDetailPage from './pages/ActivityDetailPage';
import SuccessPage from './pages/SuccessPage';
import PublishSuccessPage from './pages/PublishSuccessPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import PrivacyPage from './pages/PrivacyPage';
import NotificationSettingsPage from './pages/NotificationSettingsPage';
import HelpPage from './pages/HelpPage';
import InviteFriendsPage from './pages/InviteFriendsPage';
import FriendsPage from './pages/FriendsPage';
import FriendProfilePage from './pages/FriendProfilePage';
import ActivityHistoryPage from './pages/ActivityHistoryPage';
import AvatarUploadPage from './pages/AvatarUploadPage';
import EditProfilePage from './pages/EditProfilePage';
import { ActivityProvider } from './context/ActivityContext';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <ActivityProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/activity/:id" element={<ActivityDetailPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/publish-success" element={<PublishSuccessPage />} />
            <Route path="/invite" element={<InviteFriendsPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/friend/:id" element={<FriendProfilePage />} />
            <Route path="/history/:type" element={<ActivityHistoryPage />} />
            <Route path="/avatar-upload" element={<AvatarUploadPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/notifications-settings" element={<NotificationSettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </ActivityProvider>
    </UserProvider>
  );
}
