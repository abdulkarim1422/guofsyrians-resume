import { useState } from 'react';
import { Phone, MapPin, Send, User, MessageSquare, Calendar, Briefcase, GraduationCap, Code, Award, Globe } from 'lucide-react';
import { SEO } from '../Components/SEO';
import { MailInputComponent } from '../Components/form-components/MailInputComponent';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    // Profile data
    name: '',
    occupation: '',
    location: '',
    email: '',
    telephone: '',
    image: '',
    
    // About Me
    aboutLabel: '',
    aboutDescription: '',
    
    // Skills
    technicalLabel: '',
    softLabel: '',
    technicalSkills: '',
    softSkills: '',
    
    // Social Media
    socialLabel: '',
    linkedinUrl: '',
    githubUrl: '',
    
    // Work Experience
    works: [
      {
        title: '',
        period: '',
        company: '',
        description: ['']
      }
    ],
    
    // Academic
    academic: [
      {
        career: '',
        date: '',
        institution: ''
      }
    ],
    
    // Projects
    projects: [
      {
        name: '',
        company: '',
        period: '',
        description: ['']
      }
    ]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleWorkChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      works: prev.works.map((work, i) => 
        i === index ? { ...work, [field]: value } : work
      )
    }));
  };

  const handleWorkDescriptionChange = (workIndex, descIndex, value) => {
    setFormData(prev => ({
      ...prev,
      works: prev.works.map((work, i) => 
        i === workIndex ? {
          ...work,
          description: work.description.map((desc, j) => 
            j === descIndex ? value : desc
          )
        } : work
      )
    }));
  };

  const handleAcademicChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      academic: prev.academic.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleProjectChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    }));
  };

  const handleProjectDescriptionChange = (projectIndex, descIndex, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === projectIndex ? {
          ...project,
          description: project.description.map((desc, j) => 
            j === descIndex ? value : desc
          )
        } : project
      )
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with the complete data structure
    try {
      const updatedData = {
        profile: {
          name: formData.name,
          ocupation: formData.occupation,
          location: formData.location,
          email: formData.email,
          telephone: formData.telephone,
          image: formData.image
        },
        aboutMe: {
          label: formData.aboutLabel,
          description: formData.aboutDescription
        },
        skills: {
          technicalLabel: formData.technicalLabel,
          softLabel: formData.softLabel,
          technicalSkills: formData.technicalSkills.split(',').map(skill => skill.trim()),
          softSkills: formData.softSkills.split(',').map(skill => skill.trim())
        },
        socialMedia: {
          label: formData.socialLabel,
          social: [
            {
              label: "Visit Matias Lagos LinkedIn profile",
              name: "linkedin",
              url: formData.linkedinUrl,
              className: "bxl-linkedin-square"
            },
            {
              label: "Visit Matias Lagos GitHub profile", 
              name: "github",
              url: formData.githubUrl,
              className: "bxl-github"
            }
          ]
        },
        experience: {
          works: formData.works,
          academic: formData.academic,
          proyects: formData.projects
        }
      };

      console.log('Updated Data:', updatedData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      <SEO 
        name="Resume Editor - Matias Lagos"
        ocupation="FullStack Software Developer"
        location="Santiago, Chile"
        description="Edit and update resume information including profile, skills, experience, and projects."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Resume Editor
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Update your professional information, skills, experience, and projects. 
              All changes will be saved to the database.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-8">
            
            {/* Profile Information */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                            <User className="w-6 h-6 mr-2 text-blue-600" />
                            Profile Information
                          </h2>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Your full name"
                              />
                            </div>

                            <div>
                              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                                Occupation *
                              </label>
                              <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Your job title"
                              />
                            </div>

                            {MailInputComponent(formData, setFormData)}

                            <div>
                              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                  type="tel"
                                  id="telephone"
                                  name="telephone"
                                  value={formData.telephone}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                  placeholder="+90 5xx xxx xx xx"
                                />
                              </div>
                            </div>

                            <div>
                              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                Location *
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                  type="text"
                                  id="location"
                                  name="location"
                                  value={formData.location}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                  placeholder="City, Country"
                                />
                              </div>
                            </div>

                            <div>
                              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                                Profile Image Path
                              </label>
                              <input
                                type="text"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="images/profile.webp"
                              />
                            </div>
                          </div>
                        </div>

            {/* Academic Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-2 text-red-600" />
                    Academic Background
                </h2>
                
                {formData.academic.map((edu, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Education {index + 1}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Career/Degree
                                </label>
                                <select
                                    value={edu.career}
                                    onChange={(e) => handleAcademicChange(index, 'career', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select a field</option>
                                    <option value="medicine">Medicine</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="sience">Sience</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Graduation Date
                                </label>
                                <input
                                    type="text"
                                    value={edu.date}
                                    onChange={(e) => handleAcademicChange(index, 'date', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="2019"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Institution
                                </label>
                                <input
                                    type="text"
                                    value={edu.institution}
                                    onChange={(e) => handleAcademicChange(index, 'institution', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="University name"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* About Me Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-green-600" />
                About Me
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="aboutLabel" className="block text-sm font-medium text-gray-700 mb-2">
                    Section Label
                  </label>
                  <input
                    type="text"
                    id="aboutLabel"
                    name="aboutLabel"
                    value={formData.aboutLabel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Profile / About"
                  />
                </div>

                <div>
                  <label htmlFor="aboutDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="aboutDescription"
                    name="aboutDescription"
                    value={formData.aboutDescription}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Brief description about yourself..."
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-purple-600" />
                Skills
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="technicalLabel" className="block text-sm font-medium text-gray-700 mb-2">
                    Technical Skills Label
                  </label>
                  <input
                    type="text"
                    id="technicalLabel"
                    name="technicalLabel"
                    value={formData.technicalLabel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Technologies"
                  />
                </div>

                <div>
                  <label htmlFor="softLabel" className="block text-sm font-medium text-gray-700 mb-2">
                    Soft Skills Label
                  </label>
                  <input
                    type="text"
                    id="softLabel"
                    name="softLabel"
                    value={formData.softLabel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Skills"
                  />
                </div>

                <div>
                  <label htmlFor="technicalSkills" className="block text-sm font-medium text-gray-700 mb-2">
                    Technical Skills (comma-separated)
                  </label>
                  <textarea
                    id="technicalSkills"
                    name="technicalSkills"
                    value={formData.technicalSkills}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Angular, React, Java, Node.js..."
                  />
                </div>

                <div>
                  <label htmlFor="softSkills" className="block text-sm font-medium text-gray-700 mb-2">
                    Soft Skills (comma-separated)
                  </label>
                  <textarea
                    id="softSkills"
                    name="softSkills"
                    value={formData.softSkills}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Problem Solving, Communication, Leadership..."
                  />
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-orange-600" />
                Social Media
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="socialLabel" className="block text-sm font-medium text-gray-700 mb-2">
                    Section Label
                  </label>
                  <input
                    type="text"
                    id="socialLabel"
                    name="socialLabel"
                    value={formData.socialLabel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="SOCIAL"
                  />
                </div>

                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    id="githubUrl"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="https://github.com/username"
                  />
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-indigo-600" />
                Work Experience
              </h2>
              
              {formData.works.map((work, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Position {index + 1}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={work.title}
                        onChange={(e) => handleWorkChange(index, 'title', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="FULL-STACK DEVELOPER"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Period
                      </label>
                      <input
                        type="text"
                        value={work.period}
                        onChange={(e) => handleWorkChange(index, 'period', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Oct. 2021 - Present"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={work.company}
                        onChange={(e) => handleWorkChange(index, 'company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description
                  </label>
                  {work.description.map((desc, descIndex) => (
                    <div key={descIndex} className="mb-2">
                      <textarea
                        value={desc}
                        onChange={(e) => handleWorkDescriptionChange(index, descIndex, e.target.value)}
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder={`Description ${descIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>



            {/* Projects Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-600" />
                Projects
              </h2>
              
              {formData.projects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Project {index + 1}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Project name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={project.company}
                        onChange={(e) => handleProjectChange(index, 'company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Client/Company"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Period
                      </label>
                      <input
                        type="text"
                        value={project.period}
                        onChange={(e) => handleProjectChange(index, 'period', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Nov. 2019 - Jan. 2020"
                      />
                    </div>
                  </div>
                  
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  {project.description.map((desc, descIndex) => (
                    <div key={descIndex} className="mb-2">
                      <textarea
                        value={desc}
                        onChange={(e) => handleProjectDescriptionChange(index, descIndex, e.target.value)}
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder={`Description ${descIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Saving Changes...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Save Resume Data</span>
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mt-4">
                  Resume data saved successfully! All changes have been updated.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mt-4">
                  There was an error saving the data. Please try again.
                </div>
              )}
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

