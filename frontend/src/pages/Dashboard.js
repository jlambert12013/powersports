import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom '
import { useSelector } from 'react-redux'

function Dashboard() {
  const navigate = useNavigate()
  const { user } = useSelector(() => StaticRange.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <h1 style={{ margin: '50%' }}>Dashboard</h1>
    </>
  )
}

export default Dashboard
