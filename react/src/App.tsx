import TaskComponent from './components/TaskComponent'
import Greeting from './components/Greeting'
import ProfileCard from './components/ProfileCard'
import ProductCard from './components/ProductCard'
import FormComponent from './components/FormComponent'
import ExpenseForm from './components/ExpenseForm'

function App() {
  let tasks = ['Session', 'break', 'Documentation', 'Session', 'break'];
  
  return (
    <div className="container py-5">
      <Greeting />
      
      <hr className="my-5" />
      
      <h2 className="mb-4">Task Component</h2>
      <TaskComponent tasks={tasks} heading="Todays tasks" />
      
      <hr className="my-5" />
      
      <h2 className="mb-4">Profile Cards</h2>
      <div className="d-flex gap-3 flex-wrap">
        <ProfileCard 
          name="Sathvik Inguva" 
          occupation="Software Engineer" 
          email="sathvik@gmail.com" 
        />
        <ProfileCard 
          name="Yuva Thota" 
          occupation="Product Manager" 
          email="yuva@gmail.com" 
        />
      </div>
      
      <hr className="my-5" />
      
      <h2 className="mb-4">Product Cards</h2>
      <div className="d-flex gap-3 flex-wrap">
        <ProductCard 
          name="Laptop" 
          price={60000} 
          inStock={true} 
        />
        <ProductCard 
          name="Monitor" 
          price={12000} 
          inStock={false} 
        />
      </div>

      <hr className="my-5" />

      <FormComponent />

      <hr className="my-5" />

      <ExpenseForm />
    </div>
  )
}

export default App