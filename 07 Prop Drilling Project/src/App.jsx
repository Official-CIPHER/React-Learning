import Card from "./components/Card";

const App = () => {
  // const arr = [
  //   {
  //     user:'Vishal',
  //     age:22
  //   },
  //   {
  //     user:'Aditya',
  //     age:23
  //   },
  //   {
  //     user:'Patel',
  //     age: 24
  //   }
  // ];

  const jobOpenings = [
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "₹2500/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/amazon-simple.svg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: "₹2800/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "₹3500/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/meta-3.svg",
      companyName: "Meta",
      datePosted: "3 weeks ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      payPerHour: "₹3000/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/apple1.svg",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "₹4000/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "₹4200/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg",
      companyName: "LinkedIn",
      datePosted: "4 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: "₹3200/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/uber-15.svg",
      companyName: "Uber",
      datePosted: "2 days ago",
      post: "Android Developer",
      tag1: "Contract",
      tag2: "Junior Level",
      payPerHour: "₹2200/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/airbnb.svg",
      companyName: "Airbnb",
      datePosted: "3 months ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "₹3800/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/tesla-pure.svg",
      companyName: "Tesla",
      datePosted: "10 weeks ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: "₹3600/hr",
      location: "Pune, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((elem, idx) => (
        <div key={idx}>
          <Card
            brand={elem.brandLogo}
            company={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.payPerHour}
            location={elem.location}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
