import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, GraduationCap, Users, Shield, ArrowRight, Sparkles, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface LandingLoginProps {
  onToggleMode: () => void;
}

export default function LandingLogin({ onToggleMode }: LandingLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'admin'>('admin');
  const [error, setError] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const { login, isLoading, theme, toggleTheme } = useAuth();

  useEffect(() => {
    setIsAnimated(true);
    // Auto-fill admin credentials by default
    setEmail('admin@projectbloom.com');
    setPassword('password');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const roleOptions = [
    {
      id: 'admin' as const,
      label: 'Admin',
      subtitle: 'Manage. Scale. Empower.',
      icon: Shield,
      color: 'from-purple-500 to-purple-700',
      hoverColor: 'hover:from-purple-600 hover:to-purple-800',
      email: 'admin@projectbloom.com'
    },
    {
      id: 'teacher' as const,
      label: 'Faculty',
      subtitle: 'Teach. Inspire. Transform.',
      icon: Users,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800',
      email: 'teacher@projectbloom.com'
    },
    {
      id: 'student' as const,
      label: 'Student',
      subtitle: 'Learn. Build. Lead.',
      icon: GraduationCap,
      color: 'from-green-500 to-green-700',
      hoverColor: 'hover:from-green-600 hover:to-green-800',
      email: 'student@projectbloom.com'
    }
  ];

  const selectedRoleData = roleOptions.find(role => role.id === selectedRole);

  const handleRoleSelect = (role: 'student' | 'teacher' | 'admin') => {
    setSelectedRole(role);
    const roleData = roleOptions.find(r => r.id === role);
    if (roleData) {
      setEmail(roleData.email);
      setPassword('password');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-indigo-100/30"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse ${
                isAnimated ? 'animate-bounce' : ''
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-300/40 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-white/90 transition-all duration-300 shadow-lg"
      >
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </button>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Branding */}
          <div className={`text-gray-800 space-y-8 ${isAnimated ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                  ProjectBloom
                </h1>
                <p className="text-blue-600 text-sm font-medium">Next-Gen Learning Platform</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Next-Gen Tech
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Empowering students to become <span className="text-emerald-600 font-semibold">creators</span>, not just coders. 
                Join thousands learning the future of technology.
              </p>

              {/* Feature Points */}
              <div className="space-y-3 pt-4">
                {[
                  'Interactive coding environments',
                  'Real-world project experience',
                  'Industry expert mentorship',
                  'Career-focused curriculum'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className={`${isAnimated ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <div className="backdrop-blur-lg bg-white/90 rounded-3xl p-8 shadow-2xl border border-white/50 max-w-md mx-auto">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h3>
                <p className="text-gray-600">Sign in to continue your learning journey</p>
              </div>

              {/* Role Selector */}
              <div className="mb-8">
                <p className="text-gray-700 text-sm font-medium mb-4">Choose your role:</p>
                <div className="grid grid-cols-3 gap-3">
                  {roleOptions.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => handleRoleSelect(role.id)}
                      className={`relative p-4 rounded-xl border-2 transition-all duration-300 group ${
                        selectedRole === role.id
                          ? `bg-gradient-to-r ${role.color} border-white/50 shadow-lg text-white`
                          : 'border-gray-200 hover:border-gray-300 bg-white/50 text-gray-700'
                      }`}
                    >
                      <role.icon className={`h-6 w-6 mx-auto mb-2 ${
                        selectedRole === role.id ? 'text-white' : 'text-gray-600'
                      }`} />
                      <div className="text-center">
                        <p className={`text-sm font-semibold ${
                          selectedRole === role.id ? 'text-white' : 'text-gray-700'
                        }`}>
                          {role.label}
                        </p>
                        <p className={`text-xs mt-1 ${
                          selectedRole === role.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {role.subtitle}
                        </p>
                      </div>
                      
                      {selectedRole === role.id && (
                        <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-gray-600">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 bg-white text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">Remember me</span>
                  </label>
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    selectedRoleData 
                      ? `bg-gradient-to-r ${selectedRoleData.color} ${selectedRoleData.hoverColor} shadow-lg hover:shadow-xl transform hover:scale-105`
                      : 'bg-gray-500'
                  } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <span>Sign In as {selectedRoleData?.label}</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Footer Links */}
              <div className="mt-6 text-center space-y-2">
                <button
                  onClick={onToggleMode}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Don't have an account? <span className="font-semibold">Sign up</span>
                </button>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <button className="hover:text-gray-700 transition-colors">Terms of Service</button>
                  <span>•</span>
                  <button className="hover:text-gray-700 transition-colors">Privacy Policy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}