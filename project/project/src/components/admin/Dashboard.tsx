import React, { useState } from 'react';
import {
  Users,
  BookOpen,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Shield,
  Database,
  Activity,
  UserCheck,
  UserX,
  Eye,
  Calendar,
  Download,
  MessageSquare,
  Settings,
  FileText,
  BarChart3,
  PieChart,
  Globe,
  Bell,
  CreditCard,
  Flag,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Ban,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Award,
  Target,
  X,
  Save,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  RefreshCw,
  Send,
  Archive,
  MoreVertical,
  TrendingDown,
  Zap,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  Grid,
  List,
  RotateCcw,
  AlertCircle,
  Info,
  CheckSquare,
  Square,
  Loader
} from 'lucide-react';
import { Line, Doughnut, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [userTab, setUserTab] = useState('students');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [bulkAction, setBulkAction] = useState('');

  // Enhanced Mock Data
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'Alice Johnson', 
      email: 'alice@example.com', 
      role: 'Student', 
      status: 'Active', 
      joinDate: '2024-01-15', 
      lastActive: '2 hours ago', 
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=100', 
      phone: '+1 234 567 8900', 
      courses: 5, 
      gpa: 3.8,
      location: 'New York, USA',
      totalSpent: 1250,
      completionRate: 85
    },
    { 
      id: 2, 
      name: 'Dr. Robert Smith', 
      email: 'robert@example.com', 
      role: 'Teacher', 
      status: 'Active', 
      joinDate: '2024-01-10', 
      lastActive: '1 hour ago', 
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=100', 
      phone: '+1 234 567 8901', 
      courses: 8, 
      rating: 4.9,
      location: 'California, USA',
      totalEarnings: 15600,
      studentsCount: 324
    },
    { 
      id: 3, 
      name: 'Emily Davis', 
      email: 'emily@example.com', 
      role: 'Student', 
      status: 'Suspended', 
      joinDate: '2024-01-08', 
      lastActive: '1 day ago', 
      avatar: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?w=100', 
      phone: '+1 234 567 8902', 
      courses: 3, 
      gpa: 2.1,
      location: 'Texas, USA',
      totalSpent: 450,
      completionRate: 45
    },
    { 
      id: 4, 
      name: 'Prof. Michael Brown', 
      email: 'michael@example.com', 
      role: 'Teacher', 
      status: 'Pending', 
      joinDate: '2024-01-12', 
      lastActive: '30 min ago', 
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=100', 
      phone: '+1 234 567 8903', 
      courses: 0, 
      rating: 0,
      location: 'Florida, USA',
      totalEarnings: 0,
      studentsCount: 0
    },
    { 
      id: 5, 
      name: 'Sarah Wilson', 
      email: 'sarah@example.com', 
      role: 'Student', 
      status: 'Active', 
      joinDate: '2024-01-20', 
      lastActive: '5 hours ago', 
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?w=100', 
      phone: '+1 234 567 8904', 
      courses: 7, 
      gpa: 3.9,
      location: 'Washington, USA',
      totalSpent: 2100,
      completionRate: 92
    },
  ]);

  const [courses, setCourses] = useState([
    { 
      id: 1, 
      title: 'Advanced Machine Learning', 
      instructor: 'Dr. Sarah Chen', 
      category: 'Technology', 
      status: 'Published', 
      submitted: '2 days ago', 
      students: 156, 
      rating: 4.8, 
      price: 299, 
      duration: '12 weeks',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=300',
      description: 'Comprehensive course on advanced machine learning techniques and applications.',
      level: 'Advanced',
      totalRevenue: 46644,
      completionRate: 78
    },
    { 
      id: 2, 
      title: 'Digital Marketing Mastery', 
      instructor: 'John Wilson', 
      category: 'Business', 
      status: 'Under Review', 
      submitted: '1 day ago', 
      students: 89, 
      rating: 4.6, 
      price: 199, 
      duration: '8 weeks',
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?w=300',
      description: 'Master digital marketing strategies and grow your online presence.',
      level: 'Intermediate',
      totalRevenue: 17711,
      completionRate: 85
    },
    { 
      id: 3, 
      title: 'Creative Writing Workshop', 
      instructor: 'Maria Garcia', 
      category: 'Arts', 
      status: 'Draft', 
      submitted: '3 days ago', 
      students: 67, 
      rating: 4.9, 
      price: 149, 
      duration: '6 weeks',
      thumbnail: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?w=300',
      description: 'Unleash your creativity and improve your writing skills.',
      level: 'Beginner',
      totalRevenue: 9983,
      completionRate: 91
    },
    { 
      id: 4, 
      title: 'React Development Bootcamp', 
      instructor: 'Alex Thompson', 
      category: 'Technology', 
      status: 'Published', 
      submitted: '1 week ago', 
      students: 234, 
      rating: 4.7, 
      price: 399, 
      duration: '16 weeks',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=300',
      description: 'Complete React.js development course from beginner to advanced.',
      level: 'Intermediate',
      totalRevenue: 93366,
      completionRate: 73
    },
  ]);

  const [events, setEvents] = useState([
    { 
      id: 1, 
      title: 'AI Hackathon 2024', 
      date: '2024-02-15', 
      type: 'Hackathon', 
      status: 'Upcoming', 
      participants: 250, 
      prize: '$10,000',
      description: 'Build innovative AI solutions and compete for amazing prizes.',
      location: 'Virtual',
      duration: '48 hours',
      registrationDeadline: '2024-02-10',
      organizer: 'Tech Innovation Hub'
    },
    { 
      id: 2, 
      title: 'Web Development Bootcamp', 
      date: '2024-02-20', 
      type: 'Bootcamp', 
      status: 'Registration Open', 
      participants: 45, 
      prize: 'Certificate',
      description: 'Intensive web development training program.',
      location: 'San Francisco, CA',
      duration: '5 days',
      registrationDeadline: '2024-02-15',
      organizer: 'Code Academy'
    },
    { 
      id: 3, 
      title: 'Data Science Workshop', 
      date: '2024-01-30', 
      type: 'Workshop', 
      status: 'Completed', 
      participants: 120, 
      prize: 'Certificate',
      description: 'Hands-on data science workshop with real-world projects.',
      location: 'New York, NY',
      duration: '2 days',
      registrationDeadline: '2024-01-25',
      organizer: 'Data Science Institute'
    },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New user registration', message: '5 new users registered today', time: '2 hours ago', type: 'info', read: false },
    { id: 2, title: 'Course approval needed', message: 'Advanced Python course needs review', time: '4 hours ago', type: 'warning', read: false },
    { id: 3, title: 'System maintenance', message: 'Scheduled maintenance completed', time: '1 day ago', type: 'success', read: true },
    { id: 4, title: 'Payment issue', message: 'Payment gateway experiencing issues', time: '2 days ago', type: 'error', read: true },
  ]);

  const stats = [
    { name: 'Total Users', value: '12,847', icon: Users, color: 'bg-blue-500', change: '+12% this month', trend: 'up', details: 'Active: 11,234 | Inactive: 1,613' },
    { name: 'Active Courses', value: '1,284', icon: BookOpen, color: 'bg-green-500', change: '+8% this month', trend: 'up', details: 'Published: 1,156 | Draft: 128' },
    { name: 'Monthly Revenue', value: '$89,432', icon: DollarSign, color: 'bg-yellow-500', change: '+15% this month', trend: 'up', details: 'Courses: $67,432 | Events: $22,000' },
    { name: 'System Health', value: '99.9%', icon: Activity, color: 'bg-purple-500', change: 'All systems operational', trend: 'stable', details: 'Uptime: 99.9% | Response: 120ms' },
  ];

  // Chart Data
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Students',
        data: [650, 590, 800, 810, 560, 550, 400, 700, 850, 920, 1100, 1200],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Teachers',
        data: [120, 110, 150, 140, 130, 125, 90, 160, 180, 200, 220, 240],
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [65000, 59000, 80000, 81000, 76000, 89000],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1,
      },
    ],
  };

  const courseDistributionData = {
    labels: ['Technology', 'Business', 'Arts', 'Science', 'Health'],
    datasets: [
      {
        data: [45, 25, 15, 10, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Utility Functions
  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    if (type === 'editUser' || type === 'viewUser') {
      setSelectedUser(item);
    } else if (type === 'editCourse' || type === 'viewCourse') {
      setSelectedCourse(item);
    } else if (type === 'editEvent' || type === 'viewEvent') {
      setSelectedEvent(item);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setSelectedCourse(null);
    setSelectedEvent(null);
    setModalType('');
  };

  const handleDeleteUser = (userId) => {
    setIsLoading(true);
    setTimeout(() => {
      setUsers(users.filter(user => user.id !== userId));
      showToastMessage('User deleted successfully', 'success');
      setIsLoading(false);
    }, 1000);
  };

  const handleSuspendUser = (userId) => {
    setIsLoading(true);
    setTimeout(() => {
      setUsers(users.map(user => 
        user.id === userId 
          ? { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' }
          : user
      ));
      showToastMessage('User status updated successfully', 'success');
      setIsLoading(false);
    }, 1000);
  };

  const handleBulkAction = () => {
    if (!bulkAction || selectedUsers.length === 0) {
      showToastMessage('Please select users and action', 'warning');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      if (bulkAction === 'delete') {
        setUsers(users.filter(user => !selectedUsers.includes(user.id)));
        showToastMessage(`${selectedUsers.length} users deleted`, 'success');
      } else if (bulkAction === 'suspend') {
        setUsers(users.map(user => 
          selectedUsers.includes(user.id) 
            ? { ...user, status: 'Suspended' }
            : user
        ));
        showToastMessage(`${selectedUsers.length} users suspended`, 'success');
      } else if (bulkAction === 'activate') {
        setUsers(users.map(user => 
          selectedUsers.includes(user.id) 
            ? { ...user, status: 'Active' }
            : user
        ));
        showToastMessage(`${selectedUsers.length} users activated`, 'success');
      }
      setSelectedUsers([]);
      setBulkAction('');
      setIsLoading(false);
    }, 1500);
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAllUsers = () => {
    const filteredUserIds = filteredUsers.map(user => user.id);
    setSelectedUsers(
      selectedUsers.length === filteredUserIds.length 
        ? [] 
        : filteredUserIds
    );
  };

  const handleDeleteCourse = (courseId) => {
    setIsLoading(true);
    setTimeout(() => {
      setCourses(courses.filter(course => course.id !== courseId));
      showToastMessage('Course deleted successfully', 'success');
      setIsLoading(false);
    }, 1000);
  };

  const handleApproveCourse = (courseId) => {
    setIsLoading(true);
    setTimeout(() => {
      setCourses(courses.map(course => 
        course.id === courseId 
          ? { ...course, status: 'Published' }
          : course
      ));
      showToastMessage('Course approved successfully', 'success');
      setIsLoading(false);
    }, 1000);
  };

  const handleRejectCourse = (courseId) => {
    setIsLoading(true);
    setTimeout(() => {
      setCourses(courses.map(course => 
        course.id === courseId 
          ? { ...course, status: 'Rejected' }
          : course
      ));
      showToastMessage('Course rejected', 'error');
      setIsLoading(false);
    }, 1000);
  };

  const markNotificationAsRead = (notificationId) => {
    setNotifications(notifications.map(notif => 
      notif.id === notificationId 
        ? { ...notif, read: true }
        : notif
    ));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    showToastMessage('All notifications marked as read', 'success');
  };

  const deleteNotification = (notificationId) => {
    setNotifications(notifications.filter(notif => notif.id !== notificationId));
    showToastMessage('Notification deleted', 'success');
  };

  // Filter and Sort Functions
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !filterRole || user.role.toLowerCase() === filterRole.toLowerCase();
    const matchesStatus = !filterStatus || user.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesTab = userTab === 'students' ? user.role === 'Student' : user.role === 'Teacher';
    
    return matchesSearch && matchesRole && matchesStatus && matchesTab;
  }).sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const filteredCourses = courses.filter(course => {
    return course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
           course.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredEvents = events.filter(event => {
    return event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           event.type.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Component Renderers
  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`flex items-center text-xs ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : stat.trend === 'down' ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                  {stat.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                  {stat.trend === 'down' && <TrendingDown className="h-3 w-3 mr-1" />}
                  <span>{stat.change}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Growth Trends</h3>
            <div className="flex space-x-2">
              {['7d', '30d', '90d', '1y'].map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setSelectedTimeRange(range);
                    showToastMessage(`Viewing ${range} data`, 'info');
                  }}
                  className={`px-3 py-1 text-xs rounded-lg transition-all duration-300 ${
                    selectedTimeRange === range
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div className="h-80">
            <Line data={userGrowthData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Course Distribution</h3>
          <div className="h-80 flex items-center justify-center">
            <Doughnut data={courseDistributionData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Plus, label: 'Add User', color: 'blue', action: () => openModal('addUser') },
            { icon: BookOpen, label: 'Add Course', color: 'green', action: () => openModal('addCourse') },
            { icon: Calendar, label: 'Create Event', color: 'purple', action: () => openModal('addEvent') },
            { icon: Send, label: 'Send Announcement', color: 'orange', action: () => openModal('sendAnnouncement') },
            { icon: Download, label: 'Export Data', color: 'indigo', action: () => showToastMessage('Export started', 'info') },
            { icon: Database, label: 'Backup System', color: 'yellow', action: () => showToastMessage('Backup initiated', 'info') },
            { icon: Shield, label: 'Security Scan', color: 'red', action: () => showToastMessage('Security scan started', 'info') },
            { icon: RefreshCw, label: 'Refresh Data', color: 'gray', action: () => showToastMessage('Data refreshed', 'success') },
          ].map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`flex flex-col items-center justify-center p-4 bg-${action.color}-50 dark:bg-${action.color}-900/20 rounded-lg border border-${action.color}-200 dark:border-${action.color}-800 hover:bg-${action.color}-100 dark:hover:bg-${action.color}-900/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
            >
              <action.icon className={`h-6 w-6 text-${action.color}-600 dark:text-${action.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`} />
              <span className={`text-sm font-medium text-${action.color}-700 dark:text-${action.color}-300`}>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            <button 
              onClick={() => showToastMessage('Activity refreshed', 'success')}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { icon: UserCheck, message: 'New user Alice Johnson registered', time: '2 minutes ago', type: 'success' },
              { icon: BookOpen, message: 'Course "React Mastery" was published', time: '15 minutes ago', type: 'info' },
              { icon: DollarSign, message: 'Payment of $299 received from John Doe', time: '1 hour ago', type: 'success' },
              { icon: AlertTriangle, message: 'Course "Python Basics" flagged for review', time: '2 hours ago', type: 'warning' },
              { icon: Users, message: '25 new students enrolled today', time: '3 hours ago', type: 'info' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <div className={`p-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-100 dark:bg-green-900/20' :
                  activity.type === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/20' :
                  'bg-blue-100 dark:bg-blue-900/20'
                }`}>
                  <activity.icon className={`h-4 w-4 ${
                    activity.type === 'success' ? 'text-green-600 dark:text-green-400' :
                    activity.type === 'warning' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-blue-600 dark:text-blue-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.message}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserManagementTab = () => (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage all platform users and their permissions</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => openModal('addUser')}
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </button>
          <button 
            onClick={() => showToastMessage('Export completed successfully', 'success')}
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
              showFilters 
                ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <FilterIcon className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Enhanced Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {[
            { id: 'students', name: 'Students', count: users.filter(u => u.role === 'Student').length, icon: GraduationCap },
            { id: 'teachers', name: 'Teachers', count: users.filter(u => u.role === 'Teacher').length, icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setUserTab(tab.id);
                setSelectedUsers([]);
                showToastMessage(`Viewing ${tab.name.toLowerCase()}`, 'info');
              }}
              className={`flex items-center py-3 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                userTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 scale-105'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105'
              }`}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.name} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Enhanced Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name, email, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex space-x-2">
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="pending">Pending</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedUsers.length > 0 && (
            <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
                </span>
                <select
                  value={bulkAction}
                  onChange={(e) => setBulkAction(e.target.value)}
                  className="px-3 py-1 text-sm border border-blue-300 dark:border-blue-700 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select Action</option>
                  <option value="activate">Activate</option>
                  <option value="suspend">Suspend</option>
                  <option value="delete">Delete</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleBulkAction}
                  disabled={!bulkAction || isLoading}
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : 'Apply'}
                </button>
                <button
                  onClick={() => setSelectedUsers([])}
                  className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Users Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
                        user.status === 'Active' ? 'bg-green-500' :
                        user.status === 'Suspended' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="relative">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Role:</span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Student' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                      'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                    }`}>
                      {user.role}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Status:</span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      user.status === 'Suspended' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                      'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {user.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Courses:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{user.courses}</span>
                  </div>

                  {user.role === 'Student' && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">GPA:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{user.gpa}</span>
                    </div>
                  )}

                  {user.role === 'Teacher' && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                        <span className="font-medium text-gray-900 dark:text-white">{user.rating}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => openModal('viewUser', user)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </button>
                    <button 
                      onClick={() => openModal('editUser', user)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </button>
                    <button 
                      onClick={() => handleSuspendUser(user.id)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
                    >
                      <Ban className="h-3 w-3 mr-1" />
                      {user.status === 'Active' ? 'Suspend' : 'Activate'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={handleSelectAllUsers}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                            user.status === 'Active' ? 'bg-green-500' :
                            user.status === 'Suspended' ? 'bg-red-500' : 'bg-yellow-500'
                          }`}></div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{user.phone}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'Active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        user.status === 'Suspended' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                        'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {user.role === 'Student' ? (
                          <div>
                            <div>{user.courses} courses • GPA: {user.gpa}</div>
                            <div className="text-xs text-gray-500">Completion: {user.completionRate}%</div>
                          </div>
                        ) : (
                          <div>
                            <div>{user.courses} courses • Rating: {user.rating}</div>
                            <div className="text-xs text-gray-500">{user.studentsCount} students</div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => openModal('viewUser', user)}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                          title="View User"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => openModal('editUser', user)}
                          className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 transition-colors"
                          title="Edit User"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleSuspendUser(user.id)}
                          className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-900 dark:hover:text-yellow-300 transition-colors"
                          title={user.status === 'Active' ? 'Suspend User' : 'Activate User'}
                        >
                          <Ban className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                          title="Delete User"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No users found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );

  const renderCoursesTab = () => (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Review, approve, and manage all platform courses</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => openModal('addCourse')}
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </button>
          <button 
            onClick={() => showToastMessage('Courses exported successfully', 'success')}
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Courses', value: courses.length, icon: BookOpen, color: 'blue' },
          { label: 'Published', value: courses.filter(c => c.status === 'Published').length, icon: CheckCircle, color: 'green' },
          { label: 'Under Review', value: courses.filter(c => c.status === 'Under Review').length, icon: Clock, color: 'yellow' },
          { label: 'Draft', value: courses.filter(c => c.status === 'Draft').length, icon: Edit, color: 'gray' },
        ].map((stat, index) => (
          <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}>
            <div className="flex items-center">
              <div className={`bg-${stat.color}-500 p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses by title, instructor, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Categories</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="arts">Arts</option>
            <option value="science">Science</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Status</option>
            <option value="published">Published</option>
            <option value="review">Under Review</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Enhanced Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden">
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  course.status === 'Published' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  course.status === 'Under Review' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                  'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
                }`}>
                  {course.status}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex space-x-1">
                  <button 
                    onClick={() => openModal('viewCourse', course)}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    title="View Course"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => openModal('editCourse', course)}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    title="Edit Course"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteCourse(course.id)}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    title="Delete Course"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  course.category === 'Technology' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                  course.category === 'Business' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  course.category === 'Arts' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                  'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
                }`}>
                  {course.category}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  course.level === 'Beginner' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}>
                  {course.level}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {course.instructor}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{course.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-gray-600 dark:text-gray-400">{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-medium text-gray-900 dark:text-white">{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-gray-600 dark:text-gray-400">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                    <span className="font-medium text-green-600 dark:text-green-400">${course.price}</span>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Completion Rate</span>
                    <span className="font-medium text-gray-900 dark:text-white">{course.completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.completionRate}%` }}
                    />
                  </div>
                </div>
              </div>
              
              {course.status === 'Under Review' && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleApproveCourse(course.id)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </button>
                    <button 
                      onClick={() => handleRejectCourse(course.id)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No courses found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );

  const renderEventsTab = () => (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Events Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage hackathons, bootcamps, and workshops</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => openModal('addEvent')}
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </button>
          <button 
            onClick={() => showToastMessage('Events exported successfully', 'success')}
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Events', value: events.length, icon: Calendar, color: 'purple' },
          { label: 'Upcoming', value: events.filter(e => e.status === 'Upcoming').length, icon: Clock, color: 'blue' },
          { label: 'Registration Open', value: events.filter(e => e.status === 'Registration Open').length, icon: UserCheck, color: 'green' },
          { label: 'Completed', value: events.filter(e => e.status === 'Completed').length, icon: CheckCircle, color: 'gray' },
        ].map((stat, index) => (
          <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}>
            <div className="flex items-center">
              <div className={`bg-${stat.color}-500 p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events by title, type, or organizer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Types</option>
            <option value="hackathon">Hackathon</option>
            <option value="bootcamp">Bootcamp</option>
            <option value="workshop">Workshop</option>
            <option value="webinar">Webinar</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="registration">Registration Open</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Enhanced Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer overflow-hidden"
               onClick={() => openModal('viewEvent', event)}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  event.status === 'Upcoming' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                  event.status === 'Registration Open' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
                }`}>
                  {event.status}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  event.type === 'Hackathon' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                  event.type === 'Bootcamp' ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' :
                  'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'
                }`}>
                  {event.type}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{event.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.participants} participants</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Award className="h-4 w-4 mr-2" />
                  <span>{event.prize}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal('editEvent', event);
                    }}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      showToastMessage('Event details copied to clipboard', 'success');
                    }}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Share
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal('viewEvent', event);
                    }}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No events found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Platform Analytics</h2>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex space-x-3">
          {['7D', '1M', '3M', '1Y'].map((period) => (
            <button
              key={period}
              onClick={() => {
                setSelectedTimeRange(period.toLowerCase());
                showToastMessage(`Viewing ${period} analytics`, 'info');
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedTimeRange === period.toLowerCase()
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {period}
            </button>
          ))}
          <button 
            onClick={() => showToastMessage('Analytics report exported', 'success')}
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Enhanced Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Course Completion Rate', value: '78.5%', change: '+2.3%', icon: Target, color: 'text-green-600', trend: 'up' },
          { title: 'Average Session Time', value: '24.5 min', change: '+1.2 min', icon: Clock, color: 'text-blue-600', trend: 'up' },
          { title: 'User Retention', value: '85.2%', change: '-1.1%', icon: Users, color: 'text-purple-600', trend: 'down' },
          { title: 'Support Satisfaction', value: '4.8/5', change: '+0.2', icon: Star, color: 'text-yellow-600', trend: 'up' },
        ].map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                <div className="flex items-center mt-1">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last period
                  </p>
                </div>
              </div>
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                metric.color === 'text-green-600' ? 'bg-green-100 dark:bg-green-900' :
                metric.color === 'text-blue-600' ? 'bg-blue-100 dark:bg-blue-900' :
                metric.color === 'text-purple-600' ? 'bg-purple-100 dark:bg-purple-900' :
                'bg-yellow-100 dark:bg-yellow-900'
              }`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Trends</h3>
          <div className="h-80">
            <Bar data={revenueData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Engagement</h3>
          <div className="space-y-4">
            {[
              { label: 'Course Views', value: 85, color: 'bg-blue-500' },
              { label: 'Video Completions', value: 72, color: 'bg-green-500' },
              { label: 'Quiz Attempts', value: 68, color: 'bg-yellow-500' },
              { label: 'Assignment Submissions', value: 91, color: 'bg-purple-500' },
              { label: 'Forum Participation', value: 45, color: 'bg-pink-500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white w-8">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Performing Courses</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {courses.slice(0, 5).map((course) => (
                <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{course.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{course.instructor}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {course.students}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                    ${course.totalRevenue?.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${course.completionRate}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">{course.completionRate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{course.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Platform Settings</h2>
        <p className="text-gray-600 dark:text-gray-400">Configure global platform settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced General Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">General Settings</h3>
          <div className="space-y-6">
            {[
              { 
                label: 'Email Notifications', 
                description: 'Send email notifications to users',
                enabled: true,
                icon: Mail
              },
              { 
                label: 'Course Auto-Approval', 
                description: 'Automatically approve new courses',
                enabled: false,
                icon: CheckCircle
              },
              { 
                label: 'User Registration', 
                description: 'Allow new user registrations',
                enabled: true,
                icon: UserCheck
              },
              { 
                label: 'Maintenance Mode', 
                description: 'Enable maintenance mode',
                enabled: false,
                icon: Settings
              },
              { 
                label: 'Dark Mode Default', 
                description: 'Set dark mode as default theme',
                enabled: false,
                icon: Shield
              },
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <setting.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{setting.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{setting.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    defaultChecked={setting.enabled}
                    onChange={() => showToastMessage(`${setting.label} ${setting.enabled ? 'disabled' : 'enabled'}`, 'success')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
          <button 
            onClick={() => showToastMessage('Settings saved successfully', 'success')}
            className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>

        {/* Enhanced Admin Profile */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Admin Profile</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=100"
                  alt="Admin Avatar"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <button className="absolute -bottom-1 -right-1 p-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Edit className="h-3 w-3" />
                </button>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Michael Chen</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Super Administrator</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input 
                type="text" 
                defaultValue="Michael Chen"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                defaultValue="admin@projectbloom.com"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input 
                type="tel" 
                defaultValue="+1 (555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
              <input 
                type="text" 
                defaultValue="San Francisco, CA"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>
          <div className="mt-6 flex space-x-3">
            <button 
              onClick={() => showToastMessage('Profile updated successfully', 'success')}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              <Save className="h-4 w-4 mr-2" />
              Update Profile
            </button>
            <button 
              onClick={() => openModal('changePassword')}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Platform Version', value: 'v2.1.0', icon: Info },
            { label: 'Database Status', value: 'Healthy', icon: Database, status: 'success' },
            { label: 'Last Backup', value: '2 hours ago', icon: Archive },
            { label: 'Active Sessions', value: '1,247', icon: Activity },
            { label: 'Storage Used', value: '67.2 GB', icon: Database },
            { label: 'Uptime', value: '99.9%', icon: Clock, status: 'success' },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className={`p-2 rounded-lg ${
                item.status === 'success' ? 'bg-green-100 dark:bg-green-900' : 'bg-blue-100 dark:bg-blue-900'
              }`}>
                <item.icon className={`h-4 w-4 ${
                  item.status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                }`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced Modal Component
  const renderModal = () => {
    if (!showModal) return null;

    const handleSave = (data) => {
      setIsLoading(true);
      setTimeout(() => {
        if (modalType.includes('User')) {
          if (modalType === 'addUser') {
            const newUser = {
              ...data,
              id: users.length + 1,
              avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=100',
              joinDate: new Date().toISOString().split('T')[0],
              lastActive: 'Just now',
              courses: 0,
              gpa: 0,
              rating: 0,
              location: 'Unknown',
              totalSpent: 0,
              completionRate: 0,
              studentsCount: 0,
              totalEarnings: 0
            };
            setUsers([...users, newUser]);
            showToastMessage('User created successfully', 'success');
          } else if (modalType === 'editUser') {
            setUsers(users.map(user => user.id === data.id ? { ...user, ...data } : user));
            showToastMessage('User updated successfully', 'success');
          }
        } else if (modalType.includes('Course')) {
          if (modalType === 'addCourse') {
            const newCourse = {
              ...data,
              id: courses.length + 1,
              thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=300',
              submitted: 'Just now',
              students: 0,
              rating: 0,
              status: 'Draft',
              level: 'Beginner',
              totalRevenue: 0,
              completionRate: 0
            };
            setCourses([...courses, newCourse]);
            showToastMessage('Course created successfully', 'success');
          } else if (modalType === 'editCourse') {
            setCourses(courses.map(course => course.id === data.id ? { ...course, ...data } : course));
            showToastMessage('Course updated successfully', 'success');
          }
        } else if (modalType.includes('Event')) {
          if (modalType === 'addEvent') {
            const newEvent = {
              ...data,
              id: events.length + 1,
              status: 'Upcoming',
              participants: 0
            };
            setEvents([...events, newEvent]);
            showToastMessage('Event created successfully', 'success');
          } else if (modalType === 'editEvent') {
            setEvents(events.map(event => event.id === data.id ? { ...event, ...data } : event));
            showToastMessage('Event updated successfully', 'success');
          }
        } else if (modalType === 'changePassword') {
          showToastMessage('Password changed successfully', 'success');
        } else if (modalType === 'sendAnnouncement') {
          showToastMessage('Announcement sent to all users', 'success');
        }
        
        setIsLoading(false);
        closeModal();
      }, 1500);
    };

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 backdrop-blur-sm" onClick={closeModal}></div>

          <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {modalType === 'addUser' && 'Add New User'}
                {modalType === 'editUser' && 'Edit User'}
                {modalType === 'viewUser' && 'User Details'}
                {modalType === 'addCourse' && 'Add New Course'}
                {modalType === 'editCourse' && 'Edit Course'}
                {modalType === 'viewCourse' && 'Course Details'}
                {modalType === 'addEvent' && 'Create New Event'}
                {modalType === 'editEvent' && 'Edit Event'}
                {modalType === 'viewEvent' && 'Event Details'}
                {modalType === 'changePassword' && 'Change Password'}
                {modalType === 'sendAnnouncement' && 'Send Announcement'}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {modalType.includes('User') && (
                <div className="space-y-4">
                  {modalType === 'viewUser' && selectedUser && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={selectedUser.avatar}
                          alt={selectedUser.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedUser.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{selectedUser.email}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Member since {selectedUser.joinDate}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedUser.courses}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Courses</p>
                        </div>
                        {selectedUser.role === 'Student' && (
                          <>
                            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <Star className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedUser.gpa}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">GPA</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                              <Target className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedUser.completionRate}%</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Completion</p>
                            </div>
                          </>
                        )}
                        {selectedUser.role === 'Teacher' && (
                          <>
                            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                              <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedUser.rating}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                            </div>
                            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <Users className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedUser.studentsCount}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Students</p>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact Information</label>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Phone className="h-4 w-4 mr-2" />
                              {selectedUser.phone}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4 mr-2" />
                              {selectedUser.location}
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Activity</label>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="h-4 w-4 mr-2" />
                              Last active: {selectedUser.lastActive}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-2" />
                              Joined: {selectedUser.joinDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(modalType === 'addUser' || modalType === 'editUser') && (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const data = Object.fromEntries(formData.entries());
                      if (modalType === 'editUser') {
                        data.id = selectedUser.id;
                      }
                      handleSave(data);
                    }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={selectedUser?.name || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                          <input
                            type="email"
                            name="email"
                            defaultValue={selectedUser?.email || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            defaultValue={selectedUser?.phone || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
                          <select
                            name="role"
                            defaultValue={selectedUser?.role || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Admin">Admin</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                          <select
                            name="status"
                            defaultValue={selectedUser?.status || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Suspended">Suspended</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                          <input
                            type="text"
                            name="location"
                            defaultValue={selectedUser?.location || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          {isLoading ? (
                            <Loader className="h-4 w-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="h-4 w-4 mr-2" />
                          )}
                          {modalType === 'addUser' ? 'Create User' : 'Save Changes'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {modalType.includes('Course') && (
                <div className="space-y-4">
                  {modalType === 'viewCourse' && selectedCourse && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={selectedCourse.thumbnail}
                          alt={selectedCourse.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedCourse.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">by {selectedCourse.instructor}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{selectedCourse.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCourse.students}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Students</p>
                        </div>
                        <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCourse.rating}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">${selectedCourse.price}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Course Details</label>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Category: {selectedCourse.category}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="h-4 w-4 mr-2" />
                              Duration: {selectedCourse.duration}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Award className="h-4 w-4 mr-2" />
                              Level: {selectedCourse.level}
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Performance</label>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Target className="h-4 w-4 mr-2" />
                              Completion: {selectedCourse.completionRate}%
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <DollarSign className="h-4 w-4 mr-2" />
                              Revenue: ${selectedCourse.totalRevenue?.toLocaleString()}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-2" />
                              Submitted: {selectedCourse.submitted}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(modalType === 'addCourse' || modalType === 'editCourse') && (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const data = Object.fromEntries(formData.entries());
                      if (modalType === 'editCourse') {
                        data.id = selectedCourse.id;
                      }
                      handleSave(data);
                    }}>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Course Title</label>
                          <input
                            type="text"
                            name="title"
                            defaultValue={selectedCourse?.title || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Instructor</label>
                            <input
                              type="text"
                              name="instructor"
                              defaultValue={selectedCourse?.instructor || ''}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                            <select
                              name="category"
                              defaultValue={selectedCourse?.category || ''}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select Category</option>
                              <option value="Technology">Technology</option>
                              <option value="Business">Business</option>
                              <option value="Arts">Arts</option>
                              <option value="Science">Science</option>
                              <option value="Health">Health</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($)</label>
                            <input
                              type="number"
                              name="price"
                              defaultValue={selectedCourse?.price || ''}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration</label>
                            <input
                              type="text"
                              name="duration"
                              defaultValue={selectedCourse?.duration || ''}
                              placeholder="e.g., 8 weeks"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                          <textarea
                            name="description"
                            defaultValue={selectedCourse?.description || ''}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Course description..."
                          />
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          {isLoading ? (
                            <Loader className="h-4 w-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="h-4 w-4 mr-2" />
                          )}
                          {modalType === 'addCourse' ? 'Create Course' : 'Save Changes'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {modalType.includes('Event') && (
                <div className="space-y-4">
                  {modalType === 'viewEvent' && selectedEvent && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedEvent.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">{selectedEvent.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Event Information</label>
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <CalendarIcon className="h-4 w-4 mr-3" />
                              <span className="font-medium">Date:</span>
                              <span className="ml-2">{selectedEvent.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="h-4 w-4 mr-3" />
                              <span className="font-medium">Location:</span>
                              <span className="ml-2">{selectedEvent.location}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="h-4 w-4 mr-3" />
                              <span className="font-medium">Duration:</span>
                              <span className="ml-2">{selectedEvent.duration}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Users className="h-4 w-4 mr-3" />
                              <span className="font-medium">Participants:</span>
                              <span className="ml-2">{selectedEvent.participants}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Additional Details</label>
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Award className="h-4 w-4 mr-3" />
                              <span className="font-medium">Prize:</span>
                              <span className="ml-2">{selectedEvent.prize}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Flag className="h-4 w-4 mr-3" />
                              <span className="font-medium">Type:</span>
                              <span className="ml-2">{selectedEvent.type}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <User className="h-4 w-4 mr-3" />
                              <span className="font-medium">Organizer:</span>
                              <span className="ml-2">{selectedEvent.organizer}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-3" />
                              <span className="font-medium">Registration Deadline:</span>
                              <span className="ml-2">{selectedEvent.registrationDeadline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(modalType === 'addEvent' || modalType === 'editEvent') && (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const data = Object.fromEntries(formData.entries());
                      if (modalType === 'editEvent') {
                        data.id = selectedEvent.id;
                      }
                      handleSave(data);
                    }}>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Title</label>
                          <input
                            type="text"
                            name="title"
                            defaultValue={selectedEvent?.title || ''}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Type</label>
                            <select
                              name="type"
                              defaultValue={selectedEvent?.type || ''}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select Type</option>
                              <option value="Hackathon">Hackathon</option>
                              <option value="Bootcamp">Bootcamp</option>
                              <option value="Workshop">Workshop</option>
                              <option value="Webinar">Webinar</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                            <input
                              type="date"
                              name="date"
                              defaultValue={selectedEvent?.date || ''}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                            <input
                              type="text"
                              name="location"
                              defaultValue={selectedEvent?.location || ''}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration</label>
                            <input
                              type="text"
                              name="duration"
                              defaultValue={selectedEvent?.duration || ''}
                              placeholder="e.g., 2 days"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prize/Reward</label>
                            <input
                              type="text"
                              name="prize"
                              defaultValue={selectedEvent?.prize || ''}
                              placeholder="e.g., $10,000 or Certificate"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Organizer</label>
                            <input
                              type="text"
                              name="organizer"
                              defaultValue={selectedEvent?.organizer || ''}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                          <textarea
                            name="description"
                            defaultValue={selectedEvent?.description || ''}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Event description..."
                          />
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          {isLoading ? (
                            <Loader className="h-4 w-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="h-4 w-4 mr-2" />
                          )}
                          {modalType === 'addEvent' ? 'Create Event' : 'Save Changes'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {modalType === 'changePassword' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSave({});
                }}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Password</label>
                      <input
                        type="password"
                        name="currentPassword"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
                      <input
                        type="password"
                        name="newPassword"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? (
                        <Loader className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Save className="h-4 w-4 mr-2" />
                      )}
                      Update Password
                    </button>
                  </div>
                </form>
              )}

              {modalType === 'sendAnnouncement' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSave({});
                }}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Announcement Title</label>
                      <input
                        type="text"
                        name="title"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter announcement title"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Audience</label>
                      <select
                        name="audience"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Audience</option>
                        <option value="all">All Users</option>
                        <option value="students">Students Only</option>
                        <option value="teachers">Teachers Only</option>
                        <option value="admins">Admins Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea
                        name="message"
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your announcement message..."
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="urgent"
                        name="urgent"
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <label htmlFor="urgent" className="text-sm text-gray-700 dark:text-gray-300">Mark as urgent</label>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? (
                        <Loader className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      Send Announcement
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Toast Component
  const renderToast = () => {
    if (!showToast) return null;

    const getToastIcon = () => {
      switch (toastType) {
        case 'success':
          return <CheckCircle className="h-5 w-5 text-green-500" />;
        case 'error':
          return <XCircle className="h-5 w-5 text-red-500" />;
        case 'warning':
          return <AlertCircle className="h-5 w-5 text-yellow-500" />;
        case 'info':
          return <Info className="h-5 w-5 text-blue-500" />;
        default:
          return <Info className="h-5 w-5 text-blue-500" />;
      }
    };

    const getToastColors = () => {
      switch (toastType) {
        case 'success':
          return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200';
        case 'error':
          return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200';
        case 'warning':
          return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200';
        case 'info':
          return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200';
        default:
          return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200';
      }
    };

    return (
      <div className="fixed top-4 right-4 z-50 animate-slide-up">
        <div className={`flex items-center p-4 rounded-lg border shadow-lg max-w-sm ${getToastColors()}`}>
          <div className="flex-shrink-0">
            {getToastIcon()}
          </div>
          <div className="ml-3 text-sm font-medium">
            {toastMessage}
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-white/20 focus:ring-2 focus:ring-gray-300 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  };

  // Enhanced Notification Dropdown
  const renderNotificationDropdown = () => {
    if (!showNotifications) return null;

    return (
      <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
            <div className="flex space-x-2">
              <button
                onClick={markAllNotificationsAsRead}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Mark all read
              </button>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
              }`}
              onClick={() => markNotificationAsRead(notification.id)}
            >
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                  !notification.read ? 'bg-blue-500' : 'bg-gray-300'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {notification.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {notification.time}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNotification(notification.id);
                  }}
                  className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={() => showToastMessage('Viewing all notifications', 'info')}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            View all notifications
          </button>
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'overview', name: 'Dashboard Overview', icon: BarChart3 },
    { id: 'users', name: 'User Management', icon: Users },
    { id: 'courses', name: 'Course Management', icon: BookOpen },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="space-y-8">
      {/* Enhanced Welcome Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
        <div className="relative flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Super Admin Control Center 🛡️</h1>
            <p className="text-gray-300 mb-4">Complete platform management and oversight</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Global Platform Control</span>
              </div>
              <div className="flex items-center space-x-1">
                <Activity className="h-4 w-4" />
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Advanced Security</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?w=200"
                alt="Admin control illustration"
                className="w-32 h-32 object-cover rounded-lg opacity-80"
              />
              <div className="absolute top-2 right-2">
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Bell className="h-4 w-4" />
                    {notifications.filter(n => !n.read).length > 0 && (
                      <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications.filter(n => !n.read).length}
                      </span>
                    )}
                  </button>
                  {renderNotificationDropdown()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm('');
                  setSelectedUsers([]);
                  showToastMessage(`Switched to ${tab.name}`, 'info');
                }}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400 scale-105'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-105'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
                {tab.id === 'users' && selectedUsers.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {selectedUsers.length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'users' && renderUserManagementTab()}
          {activeTab === 'courses' && renderCoursesTab()}
          {activeTab === 'events' && renderEventsTab()}
          {activeTab === 'analytics' && renderAnalyticsTab()}
          {activeTab === 'settings' && renderSettingsTab()}
        </div>
      </div>

      {/* Render Modal and Toast */}
      {renderModal()}
      {renderToast()}
    </div>
  );
}