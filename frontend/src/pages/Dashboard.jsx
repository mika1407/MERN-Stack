import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'

import { FaYoutube } from "react-icons/fa";


function Dashboard() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

    useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      {/* <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section> */}

    <section className='omabottom'>
      <p>Youtube videot miten nämä sivut tehtiin:</p>
      <h2>
        <a href="https://www.youtube.com/watch?v=UXjMo25Nnvc&t" target="_blank" rel="noreferrer noopener">
          <FaYoutube />  part 4
        </a>
      </h2>
    </section>
    </>
  )
}

export default Dashboard
