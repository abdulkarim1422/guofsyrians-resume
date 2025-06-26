import clsx from 'clsx';

const studentsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    grade: 'A',
    course: 'Computer Science',
    status: 'Active',
    enrollmentDate: '2023-09-01',
    avatar: 0
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    grade: 'B+',
    course: 'Mathematics',
    status: 'Active',
    enrollmentDate: '2023-09-15',
    avatar: 1
  },
  {
    id: 3,
    name: 'Carol Williams',
    email: 'carol.williams@example.com',
    grade: 'A-',
    course: 'Physics',
    status: 'Inactive',
    enrollmentDate: '2023-08-20',
    avatar: 2
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@example.com',
    grade: 'B',
    course: 'Chemistry',
    status: 'Active',
    enrollmentDate: '2023-09-10',
    avatar: 3
  },
  {
    id: 5,
    name: 'Eva Davis',
    email: 'eva.davis@example.com',
    grade: 'A+',
    course: 'Biology',
    status: 'Active',
    enrollmentDate: '2023-08-25',
    avatar: 4
  },
  {
    id: 6,
    name: 'Frank Miller',
    email: 'frank.miller@example.com',
    grade: 'C+',
    course: 'English Literature',
    status: 'Active',
    enrollmentDate: '2023-09-05',
    avatar: 5
  },
  {
    id: 7,
    name: 'Grace Wilson',
    email: 'grace.wilson@example.com',
    grade: 'A',
    course: 'History',
    status: 'Inactive',
    enrollmentDate: '2023-08-30',
    avatar: 6
  },
  {
    id: 8,
    name: 'Henry Moore',
    email: 'henry.moore@example.com',
    grade: 'B-',
    course: 'Art',
    status: 'Active',
    enrollmentDate: '2023-09-12',
    avatar: 7
  }
];

function StudentsList({ onSidebarHide }) {
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

        {/* Students Table */}
        <div className="w-full p-2">
          <div className="rounded-lg bg-card overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">All Students</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Enrollment Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {studentsData.map((student) => (
                    <StudentRow key={student.id} student={student} />
                  ))}
                </tbody>
              </table>
            </div>
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

function StudentRow({ student }) {
  const getStatusColor = (status) => {
    return status === 'Active' ? 'text-green-400' : 'text-red-400';
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-400';
    if (grade.startsWith('B')) return 'text-blue-400';
    if (grade.startsWith('C')) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <tr className="hover:bg-gray-800 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <Image 
            path={`mock_faces_${student.avatar}`} 
            className="w-10 h-10 mr-3" 
          />
          <div>
            <div className="text-sm font-medium text-white">
              {student.name}
            </div>
            <div className="text-sm text-gray-400">
              {student.email}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-white">{student.course}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={clsx("text-sm font-medium", getGradeColor(student.grade))}>
          {student.grade}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={clsx("text-sm font-medium", getStatusColor(student.status))}>
          {student.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
        {new Date(student.enrollmentDate).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
        <div className="flex space-x-2">
          <button className="text-blue-400 hover:text-blue-300">
            <Icon path="res-react-dash-options" className="w-4 h-4" />
          </button>
          <button className="text-green-400 hover:text-green-300">
            <Icon path="res-react-dash-tick" className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
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
