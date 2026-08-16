
import {Bookmark} from 'lucide-react'
import Card from './components/Card'
const App = () => {

const jobs = [
  {
    id: 1,
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    postedDaysAgo: 5,
    position: "Senior UI/UX Designer",
    jobType: "Part Time",
    level: "Senior Level",
    payPerHour: 120,
    location: "Mumbai, India"
  },

  {
    id: 2,
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    postedDaysAgo: 2,
    position: "Frontend Developer",
    jobType: "Full Time",
    level: "Mid Level",
    payPerHour: 85,
    location: "Bangalore, India"
  },

  {
    id: 3,
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    postedDaysAgo: 1,
    position: "React Developer",
    jobType: "Full Time",
    level: "Senior Level",
    payPerHour: 110,
    location: "Hyderabad, India"
  },

  {
    id: 4,
    brandLogo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    postedDaysAgo: 7,
    position: "Product Designer",
    jobType: "Part Time",
    level: "Mid Level",
    payPerHour: 70,
    location: "Bangalore, India"
  },

  {
    id: 5,
    brandLogo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    postedDaysAgo: 3,
    position: "Software Engineer",
    jobType: "Full Time",
    level: "Entry Level",
    payPerHour: 45,
    location: "Pune, India"
  },

  {
    id: 6,
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    postedDaysAgo: 4,
    position: "UX Researcher",
    jobType: "Full Time",
    level: "Mid Level",
    payPerHour: 90,
    location: "Noida, India"
  },

  {
    id: 7,
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    postedDaysAgo: 6,
    position: "Backend Developer",
    jobType: "Full Time",
    level: "Senior Level",
    payPerHour: 95,
    location: "Gurgaon, India"
  },

  {
    id: 8,
    brandLogo: "https://logo.clearbit.com/tcs.com",
    companyName: "TCS",
    postedDaysAgo: 8,
    position: "Java Developer",
    jobType: "Full Time",
    level: "Entry Level",
    payPerHour: 40,
    location: "Chennai, India"
  },

  {
    id: 9,
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    postedDaysAgo: 2,
    position: "Frontend Engineer",
    jobType: "Part Time",
    level: "Mid Level",
    payPerHour: 100,
    location: "Mumbai, India"
  },

  {
    id: 10,
    brandLogo: "https://logo.clearbit.com/swiggy.com",
    companyName: "Swiggy",
    postedDaysAgo: 9,
    position: "Product Manager",
    jobType: "Full Time",
    level: "Senior Level",
    payPerHour: 80,
    location: "Bangalore, India"
  }
];
  return (
    <div className='parent'>
      {jobs.map(function(elem , idx){
        return <div key={idx}><Card Company={elem.companyName}  pos={elem.position} jt={elem.jobType} lvl={elem.level} psd={elem.postedDaysAgo} pph={elem.payPerHour} loc={elem.location} /> </div>;
      })}
    
    </div>
  )
}

export default App