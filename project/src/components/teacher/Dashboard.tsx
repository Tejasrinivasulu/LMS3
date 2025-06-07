import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  TrendingUp,
  Clock,
  Star,
  MessageSquare,
  Award,
  Calendar,
  PlusCircle,
  BarChart3,
  FileText,
  PlayCircle,
  Upload,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Download
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function TeacherDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { name: 'Active Courses', value: '8', icon: BookOpen, color: 'bg-blue-500', change: '+2 this month' },
    { name: 'Total Students', value: '324', icon: Users, color: 'bg-green-500', change: '+45 this month' },
    { name: 'Avg. Rating', value: '4.8', icon: Star, color: 'bg-yellow-500', change: '+0.2 this month' },
    { name: 'Hours Taught', value: '156', icon: Clock, color: 'bg-purple-500', change: '+24 this week' },
  ];

  const courses = [
    {
      id: 1,
      title: 'React Development Masterclass',
      students: 89,
      rating: 4.9,
      revenue: '$2,340',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=300',
      status: 'Published',
      completion: 76,
      lessons: 24,
      assignments: 8
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      students: 67,
      rating: 4.7,
      revenue: '$1,820',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=300',
      status: 'Published',
      completion: 82,
      lessons: 18,
      assignments: 6
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      students: 54,
      rating: 4.8,
      revenue: '$1,450',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=300',
      status: 'Draft',
      completion: 45,
      lessons: 12,
      assignments: 4
    }
  ];

  const assignments = [
    { id: 1, title: 'React Component Assignment', course: 'React Development', submissions: 45, total: 89, dueDate: '2024-01-20', status: 'Active' },
    { id: 2, title: 'JavaScript Quiz', course: 'Advanced JavaScript', submissions: 32, total: 67, dueDate: '2024-01-22', status: 'Active' },
    { id: 3, title: 'Node.js Project', course: 'Node.js Backend', submissions: 28, total: 54, dueDate: '2024-01-25', status: 'Draft' }
  ];

  const submissions = [
    { id: 1, student: 'Alice Johnson', assignment: 'React Component Assignment', submittedAt: '2024-01-18 14:30', status: 'Pending', grade: null },
    { id: 2, student: 'Bob Smith', assignment: 'JavaScript Quiz', submittedAt: '2024-01-17 16:45', status: 'Graded', grade: 92 },
    { id: 3, student: 'Carol Davis', assignment: 'React Component Assignment', submittedAt: '2024-01-18 09:15', status: 'Pending', grade: null }
  ];

  const students = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', courses: 3, avgGrade: 92, lastActive: '2 hours ago', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', courses: 2, avgGrade: 88, lastActive: '1 day ago', status: 'Active' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', courses: 4, avgGrade: 95, lastActive: '3 hours ago', status: 'Active' }
  ];

  const timetable = [
    { id: 1, subject: 'React Development', time: '09:00 - 10:30', room: 'Virtual Room A', day: 'Monday', students: 89 },
    { id: 2, subject: 'JavaScript Advanced', time: '11:00 - 12:30', room: 'Virtual Room B', day: 'Monday', students: 67 },
    { id: 3, subject: 'Node.js Backend', time: '14:00 - 15:30', room: 'Virtual Room C', day: 'Tuesday', students: 54 },
    { id: 4, subject: 'Office Hours', time: '16:00 - 17:00', room: 'Virtual Room A', day: 'Wednesday', students: 15 }
  ];

  const queries = [
    { id: 1, student: 'Alice Johnson', course: 'React Development', question: 'How to handle state in functional components?', time: '2 hours ago', status: 'Pending' },
    { id: 2, student: 'Bob Smith', course: 'JavaScript Advanced', question: 'Difference between async/await and promises?', time: '1 day ago', status: 'Answered' },
    { id: 3, student: 'Carol Davis', course: 'Node.js Backend', question: 'Best practices for API design?', time: '3 hours ago', status: 'Pending' }
  ];

  const announcements = [
    { id: 1, title: 'New Assignment Posted', content: 'React Component Assignment is now available', course: 'React Development', date: '2024-01-18', type: 'assignment' },
    { id: 2, title: 'Class Rescheduled', content: 'Monday class moved to 2 PM', course: 'JavaScript Advanced', date: '2024-01-17', type: 'schedule' },
    { id: 3, title: 'Office Hours Update', content: 'Extended office hours this week', course: 'All Courses', date: '2024-01-16', type: 'general' }
  ];

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}! 👨‍🏫</h1>
            <p className="text-purple-100 mb-4">Your teaching impact is growing every day</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>324 Students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>Master Educator</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?w=200"
              alt="Teaching illustration"
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
        {/* Course Performance */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Courses</h2>
              <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Course
              </button>
            </div>
            <div className="p-6 space-y-6">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {course.title}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        course.status === 'Published' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {course.students} students
                      </span>
                      <span className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                        {course.rating}
                      </span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {course.revenue}
                      </span>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <button className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Analytics
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Submissions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Submissions</h2>
            </div>
            <div className="p-6 space-y-4">
              {submissions.slice(0, 3).map((submission) => (
                <div key={submission.id} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    submission.status === 'Graded' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {submission.student}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{submission.assignment}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{submission.submittedAt}</p>
                  </div>
                  {submission.status === 'Graded' ? (
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {submission.grade}%
                    </span>
                  ) : (
                    <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      Grade
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Student Queries */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Student Queries</h2>
            </div>
            <div className="p-6 space-y-4">
              {queries.filter(q => q.status === 'Pending').slice(0, 3).map((query) => (
                <div key={query.id} className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{query.student}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{query.question}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-500">{query.time}</span>
                    <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      Reply
                    </button>
                  </div>
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Courses</h2>
        <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          <PlusCircle className="h-4 w-4 mr-2" />
          Create New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-white">{course.title}</h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  course.status === 'Published' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                }`}>
                  {course.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div>
                  <span className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {course.students} students
                  </span>
                </div>
                <div>
                  <span className="flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {course.lessons} lessons
                  </span>
                </div>
                <div>
                  <span className="flex items-center">
                    <FileText className="h-3 w-3 mr-1" />
                    {course.assignments} assignments
                  </span>
                </div>
                <div>
                  <span className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                    {course.rating}
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  <Edit className="h-3 w-3 inline mr-1" />
                  Edit
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                  <Eye className="h-3 w-3 inline mr-1" />
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAssignmentsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Assignments</h2>
        <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors">
          <Upload className="h-4 w-4 mr-2" />
          Create Assignment
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Assignments</h3>
        </div>
        <div className="p-6 space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{assignment.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Due: {assignment.dueDate}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {assignment.submissions}/{assignment.total} submitted
                </div>
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                  />
                </div>
                <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2">
                  View Submissions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSubmissionsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Evaluate Submissions</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pending Evaluations</h3>
        </div>
        <div className="p-6 space-y-4">
          {submissions.filter(s => s.status === 'Pending').map((submission) => (
            <div key={submission.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{submission.student}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{submission.assignment}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Submitted: {submission.submittedAt}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Eye className="h-4 w-4 inline mr-1" />
                  Review
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Grade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recently Graded</h3>
        </div>
        <div className="p-6 space-y-4">
          {submissions.filter(s => s.status === 'Graded').map((submission) => (
            <div key={submission.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{submission.student}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{submission.assignment}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Submitted: {submission.submittedAt}</p>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${
                  submission.grade >= 90 ? 'text-green-600' :
                  submission.grade >= 80 ? 'text-blue-600' :
                  submission.grade >= 70 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {submission.grade}%
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  Edit Grade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStudentsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Students</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enrolled Students</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Courses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Avg Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{student.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{student.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {student.courses}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${
                        student.avgGrade >= 90 ? 'text-green-600' :
                        student.avgGrade >= 80 ? 'text-blue-600' :
                        student.avgGrade >= 70 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {student.avgGrade}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {student.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3">
                        View Profile
                      </button>
                      <button className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300">
                        Message
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{class_.room}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{class_.students} students</p>
                <div className="mt-3 flex space-x-2">
                  <button className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                    Start Class
                  </button>
                  <button className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnnouncementsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Announcements</h2>
        <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors">
          <PlusCircle className="h-4 w-4 mr-2" />
          Post Announcement
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className={`p-4 rounded-lg border ${
              announcement.type === 'assignment' ? 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20' :
              announcement.type === 'schedule' ? 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20' :
              'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{announcement.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{announcement.content}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-500">
                    <span>{announcement.course}</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQueriesTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Student Queries</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pending Queries</h3>
        </div>
        <div className="p-6 space-y-4">
          {queries.filter(q => q.status === 'Pending').map((query) => (
            <div key={query.id} className="p-4 border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{query.student}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{query.course}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">{query.question}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{query.time}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Answered Queries</h3>
        </div>
        <div className="p-6 space-y-4">
          {queries.filter(q => q.status === 'Answered').map((query) => (
            <div key={query.id} className="p-4 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{query.student}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{query.course}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">{query.question}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{query.time}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Dashboard', icon: TrendingUp },
    { id: 'courses', name: 'Manage Courses', icon: BookOpen },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'submissions', name: 'Evaluate', icon: CheckCircle },
    { id: 'students', name: 'Students', icon: Users },
    { id: 'timetable', name: 'Timetable', icon: Calendar },
    { id: 'announcements', name: 'Announcements', icon: MessageSquare },
    { id: 'queries', name: 'Student Queries', icon: MessageSquare },
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
          {activeTab === 'submissions' && renderSubmissionsTab()}
          {activeTab === 'students' && renderStudentsTab()}
          {activeTab === 'timetable' && renderTimetableTab()}
          {activeTab === 'announcements' && renderAnnouncementsTab()}
          {activeTab === 'queries' && renderQueriesTab()}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        © 2025 Project Bloom | All rights reserved
      </footer>
    </div>
  );
}