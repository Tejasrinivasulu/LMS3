import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  GraduationCap,
  BookOpen,
  Trophy,
  BarChart3,
  Users,
  Settings,
  Calendar,
  MessageSquare,
  PlusCircle,
  FileText,
  Target,
  Award,
  TrendingUp,
  Shield,
  Database,
  CreditCard,
  Globe,
  Bell,
  Flag,
  UserCheck,
  Activity,
  Download,
  HelpCircle,
  LogOut,
  Upload,
  CheckCircle,
  Eye
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const studentNavItems = [
  { name: 'Dashboard', href: '/student', icon: BarChart3 },
  { name: 'My Courses', href: '/student/courses', icon: BookOpen },
  { name: 'Assignments', href: '/student/assignments', icon: FileText },
  { name: 'Timetable', href: '/student/timetable', icon: Calendar },
  { name: 'Notes', href: '/student/notes', icon: Download },
  { name: 'Grades', href: '/student/grades', icon: Trophy },
  { name: 'Announcements', href: '/student/announcements', icon: Bell },
  { name: 'Ask a Query', href: '/student/queries', icon: HelpCircle },
  { name: 'Faculty Info', href: '/student/faculty', icon: Users },
  { name: 'Notifications', href: '/student/notifications', icon: Bell },
  { name: 'Settings', href: '/student/settings', icon: Settings },
];

const teacherNavItems = [
  { name: 'Dashboard', href: '/teacher', icon: BarChart3 },
  { name: 'Create Course', href: '/teacher/create', icon: PlusCircle },
  { name: 'Manage Courses', href: '/teacher/courses', icon: BookOpen },
  { name: 'Upload Work', href: '/teacher/upload', icon: Upload },
  { name: 'Evaluate Submissions', href: '/teacher/evaluate', icon: CheckCircle },
  { name: 'Timetable', href: '/teacher/timetable', icon: Calendar },
  { name: 'Announcements', href: '/teacher/announcements', icon: MessageSquare },
  { name: 'Student Queries', href: '/teacher/queries', icon: HelpCircle },
  { name: 'Performance', href: '/teacher/performance', icon: TrendingUp },
  { name: 'Notifications', href: '/teacher/notifications', icon: Bell },
  { name: 'Settings', href: '/teacher/settings', icon: Settings },
];

const adminNavItems = [
  { name: 'Admin Dashboard', href: '/admin', icon: BarChart3 },
  { name: 'Manage Users', href: '/admin/users', icon: Users },
  { name: 'Manage Courses', href: '/admin/courses', icon: BookOpen },
  { name: 'Timetable Master', href: '/admin/timetable', icon: Calendar },
  { name: 'Announcements', href: '/admin/announcements', icon: MessageSquare },
  { name: 'Analytics', href: '/admin/analytics', icon: TrendingUp },
  { name: 'Reports', href: '/admin/reports', icon: FileText },
  { name: 'View Queries', href: '/admin/queries', icon: HelpCircle },
  { name: 'System Notifications', href: '/admin/notifications', icon: Bell },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  
  const getNavItems = () => {
    switch (user?.role) {
      case 'student': return studentNavItems;
      case 'teacher': return teacherNavItems;
      case 'admin': return adminNavItems;
      default: return [];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">ProjectBloom</span>
        </div>
      </div>

      {/* User info */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <span className="text-white font-medium">{user?.name?.charAt(0)}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user?.name}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {user?.role === 'admin' ? 'Super Admin' : user?.role}
              </span>
              {user?.role === 'student' && (
                <>
                  <span className="text-xs text-gray-300">•</span>
                  <div className="flex items-center space-x-1">
                    <Award className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Level {user.level}
                    </span>
                  </div>
                </>
              )}
              {user?.role === 'admin' && (
                <>
                  <span className="text-xs text-gray-300">•</span>
                  <div className="flex items-center space-x-1">
                    <Shield className="h-3 w-3 text-red-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Full Access
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* XP Progress for students */}
        {user?.role === 'student' && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>{user.xp} XP</span>
              <span>Level {user.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(user.xp % 250) / 250 * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Admin Status Indicator */}
        {user?.role === 'admin' && (
          <div className="mt-3 p-2 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-red-600 dark:text-red-400" />
              <span className="text-xs font-medium text-red-700 dark:text-red-300">Platform Administrator</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Streak counter for students */}
      {user?.role === 'student' && user.streak > 0 && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-3 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🔥</span>
                <span className="text-sm font-medium">Streak</span>
              </div>
              <span className="text-lg font-bold">{user.streak}</span>
            </div>
            <p className="text-xs mt-1 opacity-90">Keep it up! Learning daily builds momentum.</p>
          </div>
        </div>
      )}

      {/* Admin Quick Actions */}
      {user?.role === 'admin' && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-2">
            <button className="w-full flex items-center justify-center px-3 py-2 text-xs font-medium bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
              <Bell className="h-3 w-3 mr-2" />
              Send Alert
            </button>
            <button className="w-full flex items-center justify-center px-3 py-2 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/40 transition-colors">
              <Flag className="h-3 w-3 mr-2" />
              Review Reports
            </button>
          </div>
        </div>
      )}

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}