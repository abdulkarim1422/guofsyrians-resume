import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const studentsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    university: 'Harvard University',
    major: 'Computer Science',
    year: 'Doktora',
    graduationDate: '2024-05-15',
    cvLink: 'https://drive.google.com/file/d/alice-cv',
    avatar: 0
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    university: 'MIT',
    major: 'Mathematics',
    year: 'Lisans',
    graduationDate: '2025-06-10',
    cvLink: 'https://drive.google.com/file/d/bob-cv',
    avatar: 1
  },
  {
    id: 3,
    name: 'Carol Williams',
    email: 'carol.williams@example.com',
    university: 'Stanford University',
    major: 'Physics',
    year: 'Graduate',
    graduationDate: '2023-12-15',
    cvLink: 'https://drive.google.com/file/d/carol-cv',
    avatar: 2
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@example.com',
    university: 'UC Berkeley',
    major: 'Chemistry',
    year: 'Yüksek Lisans',
    graduationDate: '2026-05-20',
    cvLink: 'https://drive.google.com/file/d/david-cv',
    avatar: 3
  },
  {
    id: 5,
    name: 'Eva Davis',
    email: 'eva.davis@example.com',
    university: 'Caltech',
    major: 'Biology',
    year: 'Doktora',
    graduationDate: '2024-06-05',
    cvLink: 'https://drive.google.com/file/d/eva-cv',
    avatar: 4
  },
  {
    id: 6,
    name: 'Frank Miller',
    email: 'frank.miller@example.com',
    university: 'Yale University',
    major: 'English Literature',
    year: 'Lisans',
    graduationDate: '2025-05-25',
    cvLink: 'https://drive.google.com/file/d/frank-cv',
    avatar: 5
  },
  {
    id: 7,
    name: 'Grace Wilson',
    email: 'grace.wilson@example.com',
    university: 'Princeton University',
    major: 'History',
    year: 'Graduate',
    graduationDate: '2023-05-30',
    cvLink: 'https://drive.google.com/file/d/grace-cv',
    avatar: 6
  },
  {
    id: 8,
    name: 'Henry Moore',
    email: 'henry.moore@example.com',
    university: 'Columbia University',
    major: 'Art History',
    year: 'Ön Lisans',
    graduationDate: '2027-05-15',
    cvLink: 'https://drive.google.com/file/d/henry-cv',
    avatar: 7
  }
];

function StudentsList({ onSidebarHide }) {
const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className="h-screen flex-grow overflow-x-hidden overflow-auto flex flex-col p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white">Students List</div>
                <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                  <Icon path="res-react-dash-premium-star" />
                  <div className="ml-2 font-bold text-premium-yellow">
                    {studentsData.length} Students
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Icon
                  path="res-react-dash-date-indicator"
                  className="w-3 h-3"
                />
                <div className="ml-2">Manage all students</div>
              </div>
            </div>
            <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={onSidebarHide}
            />
          </div>
          <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
            <Icon
              path="res-react-dash-search"
              className="w-5 h-5 search-icon left-3 absolute"
            />
            <form action="#" method="POST">
              <input
                type="text"
                name="student_search"
                id="student_search"
                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                placeholder="Search students..."
              />
            </form>
          </div>
        </div>

        {/* Students Cards Grid */}
        <div className="w-full p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentsData.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>

        {/* Add Student Button */}
        <div className="w-full p-2">
          <div className="rounded-lg bg-card p-6 text-center">
            <div className="flex flex-col items-center">
              <div
                className="mb-4"
                style={{
                  background: '#414455',
                  width: '80px',
                  height: '80px',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon path="res-react-dash-add-component" className="w-8 h-8" />
              </div>
              <div className="text-white font-bold mb-2">
                Add New Student
              </div>
              <div className="text-gray-400 mb-4">
                Register a new student to the system
              </div>
              <button
                className="flex items-center p-3"
                style={{
                  background: '#2f49d1',
                  borderRadius: '15px',
                  padding: '8px 16px',
                  justifyContent: 'center',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => navigate("/form")}
              >
                <Icon path="res-react-dash-add-component" className="w-5 h-5" />
                <div className="ml-2">Add Student</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentCard({ student }) {
  const getYearColor = (year) => {
    switch (year) {
      case 'Ön Lisans': return 'bg-blue-100 text-blue-700';
      case 'yüksek Lisans': return 'bg-green-100 text-green-700';
      case 'Lisans': return 'bg-yellow-100 text-yellow-700';
      case 'Doktora': return 'bg-orange-100 text-orange-700';
      case 'Graduate': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCVClick = (cvLink) => {
    window.open(cvLink, '_blank');
  };

  const handleViewProfile = () => {
    // You can navigate to a detailed student profile page here
    console.log('View profile for:', student.name);
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4 border border-gray-700 hover:shadow-xl transition-shadow">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
            <Image 
              path={`mock_faces_${student.avatar}`} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">{student.name}</h2>
            <p className="text-sm text-gray-400 mt-1">{student.major} • {student.university}</p>
          </div>
        </div>
        <div className={clsx("px-3 py-1 rounded-full", getYearColor(student.year))}>
          <span className="text-xs font-medium">{student.year}</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-gray-300">
        <span className="font-medium">Email:</span> {student.email}
      </div>

      {/* Graduation Date */}
      <div className="text-sm text-gray-300">
        <span className="font-medium">Graduation:</span> {new Date(student.graduationDate).toLocaleDateString()}
      </div>

      {/* University and Major Tags */}
      <div>
        <div className="text-sm font-medium text-gray-300 mb-2">Academic Info:</div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            {student.university}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            {student.major}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <button
          onClick={() => handleCVClick(student.cvLink)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
        >
          <Icon path="res-react-dash-options" className="w-4 h-4" />
          <span>View CV</span>
        </button>
        <button 
          onClick={handleViewProfile}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
        >
          <span>View Profile</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Icon({ path = 'options', className = 'w-4 h-4' }) {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.svg`}
      alt=""
      className={clsx(className)}
    />
  );
}

function IconButton({
  onClick = () => {},
  icon = 'options',
  className = 'w-4 h-4',
}) {
  return (
    <button onClick={onClick} type="button" className={className}>
      <img
        src={`https://assets.codepen.io/3685267/${icon}.svg`}
        alt=""
        className="w-full h-full"
      />
    </button>
  );
}

function Image({ path = '1', className = 'w-4 h-4' }) {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.jpg`}
      alt=""
      className={clsx(className, 'rounded-full')}
    />
  );
}

export default StudentsList;
