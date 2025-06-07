import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Trophy,
  Target,
  TrendingUp,
  Calendar,
  Award,
  Zap,
  PlayCircle,
  FileText,
  Users,
  Star,
  Download,
  Bell,
  MessageSquare,
  GraduationCap,
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { name: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'bg-blue-500', change: '+2 this month' },
    { name: 'Hours Learned', value: '48', icon: Clock, color: 'bg-green-500', change: '+8 this week' },
    { name: 'Achievements', value: '24', icon: Trophy, color: 'bg-yellow-500', change: '+3 new badges' },
    { name: 'Current Streak', value: user?.streak || 0, icon: Zap, color: 'bg-orange-500', change: 'Keep it up!' },
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'React Development Masterclass',
      instructor: 'Dr. Sarah Wilson',
      progress: 75,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=300',
      nextLesson: 'Hooks and State Management',
      timeLeft: '2 hours',
      enrolled: true
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      instructor: 'Prof. John Miller',
      progress: 45,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=300',
      nextLesson: 'Async/Await Patterns',
      timeLeft: '3 hours',
      enrolled: true
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Maria Garcia',
      progress: 90,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=300',
      nextLesson: 'Final Project Review',
      timeLeft: '1 hour',
      enrolled: true
    }
  ];

  const availableCourses = [
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Dr. Alex Chen',
      rating: 4.8,
      students: 1234,
      price: 99,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=300',
      duration: '8 weeks'
    },
    {
      id: 5,
      title: 'Machine Learning Basics',
      instructor: 'Prof. Lisa Wang',
      rating: 4.9,
      students: 856,
      price: 129,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=300',
      duration: '10 weeks'
    }
  ];

  const upcomingAssignments = [
    { id: 1, title: 'React Component Assignment', course: 'React Development', dueDate: 'Due Tomorrow', priority: 'high', submitted: false },
    { id: 2, title: 'JavaScript Quiz', course: 'Advanced JavaScript', dueDate: 'Due in 3 days', priority: 'medium', submitted: false },
    { id: 3, title: 'Design Portfolio', course: 'UI/UX Design', dueDate: 'Due in 1 week', priority: 'low', submitted: true }
  ];

  const recentGrades = [
    { id: 1, assignment: 'HTML/CSS Project', course: 'Web Development', grade: 95, maxGrade: 100, feedback: 'Excellent work!' },
    { id: 2, assignment: 'JavaScript Quiz', course: 'Advanced JavaScript', grade: 88, maxGrade: 100, feedback: 'Good understanding' },
    { id: 3, assignment: 'React Components', course: 'React Development', grade: 92, maxGrade: 100, feedback: 'Well structured' }
  ];

  const announcements = [
    { id: 1, title: 'New Course: Machine Learning Basics', content: 'Exciting new course available for enrollment', date: '2 hours ago', type: 'info' },
    { id: 2, title: 'System Maintenance', content: 'Platform will be down for maintenance on Sunday', date: '1 day ago', type: 'warning' },
    { id: 3, title: 'Congratulations!', content: 'You\'ve earned the Quick Learner badge', date: '2 days ago', type: 'success' }
  ];

  const timetable = [
    { id: 1, subject: 'React Development', time: '09:00 - 10:30', instructor: 'Dr. Sarah Wilson', room: 'Virtual Room A', day: 'Monday' },
    { id: 2, subject: 'JavaScript Advanced', time: '11:00 - 12:30', instructor: 'Prof. John Miller', room: 'Virtual Room B', day: 'Monday' },
    { id: 3, subject: 'UI/UX Design', time: '14:00 - 15:30', instructor: 'Maria Garcia', room: 'Virtual Room C', day: 'Tuesday' },
    { id: 4, subject: 'Project Work', time: '16:00 - 17:30', instructor: 'Dr. Sarah Wilson', room: 'Virtual Room A', day: 'Wednesday' }
  ];

  const notes = [
    { id: 1, title: 'React Hooks Guide', course: 'React Development', type: 'PDF', size: '2.5 MB', uploadDate: '2024-01-15' },
    { id: 2, title: 'JavaScript ES6 Features', course: 'Advanced JavaScript', type: 'PDF', size: '1.8 MB', uploadDate: '2024-01-14' },
    { id: 3, title: 'Design Principles', course: 'UI/UX Design', type: 'PDF', size: '3.2 MB', uploadDate: '2024-01-13' }
  ];

  const achievements = [
    { id: 1, name: 'First Course', icon: '🎓', earned: true, description: 'Completed your first course' },
    { id: 2, name: 'Quick Learner', icon: '⚡', earned: true, description: 'Completed 3 lessons in a day' },
    { id: 3, name: 'Streak Master', icon: '🔥', earned: false, description: 'Maintain a 30-day streak' },
    { id: 4, name: 'Perfect Score', icon: '💯', earned: false, description: 'Score 100% on 5 quizzes' }
  ];

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
            <p className="text-blue-100 mb-4">Ready to continue your learning journey?</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>Level {user?.level}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4" />
                <span>{user?.xp} XP</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🔥</span>
                <span>{user?.streak} day streak</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=200"
              alt="Learning illustration"
              className="w-32 h-32 object-cover rounded-lg opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-green-600 dark:text-green-400">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Continue Learning</h2>
            </div>
            <div className="p-6 space-y-6">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructor}</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                      <PlayCircle className="h-3 w-3 mr-1" />
                      Continue
                    </button>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{course.timeLeft} left</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Assignments */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Assignments</h2>
            </div>
            <div className="p-6 space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    assignment.priority === 'high' ? 'bg-red-500' :
                    assignment.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {assignment.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{assignment.course}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{assignment.dueDate}</p>
                  </div>
                  {assignment.submitted ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <FileText className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Achievements</h2>
            </div>
            <div className="p-6 space-y-3">
              {achievements.slice(0, 4).map((achievement) => (
                <div key={achievement.id} className={`flex items-center space-x-3 p-2 rounded-lg ${
                  achievement.earned ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-gray-50 dark:bg-gray-900/20'
                }`}>
                  <span className="text-lg">{achievement.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${
                      achievement.earned ? 'text-yellow-800 dark:text-yellow-200' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {achievement.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCoursesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Courses</h2>
        <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Browse Courses
        </button>
      </div>

      {/* Enrolled Courses */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enrolled Courses</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{course.instructor}</p>
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Courses */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recommended Courses</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableCourses.map((course) => (
            <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{course.instructor}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                    {course.rating}
                  </span>
                  <span>{course.students} students</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">${course.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAssignmentsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Assignments</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pending Assignments</h3>
        </div>
        <div className="p-6 space-y-4">
          {upcomingAssignments.filter(a => !a.submitted).map((assignment) => (
            <div key={assignment.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${
                  assignment.priority === 'high' ? 'bg-red-500' :
                  assignment.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{assignment.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{assignment.dueDate}</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Submit
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Submitted Assignments</h3>
        </div>
        <div className="p-6 space-y-4">
          {upcomingAssignments.filter(a => a.submitted).map((assignment) => (
            <div key={assignment.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{assignment.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                  <p className="text-sm text-green-600 dark:text-green-400">Submitted</p>
                </div>
              </div>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTimetableTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Timetable</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Weekly Schedule</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timetable.map((class_) => (
              <div key={class_.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{class_.subject}</h4>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {class_.day}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{class_.time}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{class_.instructor}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{class_.room}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotesTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notes & Materials</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Available Notes</h3>
        </div>
        <div className="p-6 space-y-4">
          {notes.map((note) => (
            <div key={note.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <FileText className="h-8 w-8 text-red-500" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{note.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{note.course}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{note.size} • {note.uploadDate}</p>
                </div>
              </div>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGradesTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Grades & Progress</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Grades</h3>
        </div>
        <div className="p-6 space-y-4">
          {recentGrades.map((grade) => (
            <div key={grade.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{grade.assignment}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{grade.course}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{grade.feedback}</p>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${
                  grade.grade >= 90 ? 'text-green-600' :
                  grade.grade >= 80 ? 'text-blue-600' :
                  grade.grade >= 70 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {grade.grade}%
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500">out of {grade.maxGrade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnnouncementsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Announcements</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className={`p-4 rounded-lg border ${
              announcement.type === 'success' ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' :
              announcement.type === 'warning' ? 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20' :
              'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20'
            }`}>
              <div className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  announcement.type === 'success' ? 'bg-green-500' :
                  announcement.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{announcement.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{announcement.content}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{announcement.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Dashboard', icon: TrendingUp },
    { id: 'courses', name: 'My Courses', icon: BookOpen },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'timetable', name: 'Timetable', icon: Calendar },
    { id: 'notes', name: 'Notes', icon: Download },
    { id: 'grades', name: 'Grades', icon: Trophy },
    { id: 'announcements', name: 'Announcements', icon: Bell },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'courses' && renderCoursesTab()}
          {activeTab === 'assignments' && renderAssignmentsTab()}
          {activeTab === 'timetable' && renderTimetableTab()}
          {activeTab === 'notes' && renderNotesTab()}
          {activeTab === 'grades' && renderGradesTab()}
          {activeTab === 'announcements' && renderAnnouncementsTab()}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        © 2025 Project Bloom | All rights reserved
      </footer>
    </div>
  );
}