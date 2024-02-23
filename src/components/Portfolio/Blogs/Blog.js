// import AllArticles from "../Articles/AllArticles";
import FilterBox from "./FilterBox";
import { Portfolio,
         BlogTitle,
         BlogName,
         FiltersContainer,
         Paragraph,
         Image,
         textSection,
         
} from "./styledComponents";
const FilterNamesList=[
    {
        name:'All',
    },
    {
        name:'Banking IT',
    },
    {
        name:'Bigdata',
    },
    {
        name:'Business Intelligence',
    },
    {
        name:'CIO Blog',
    },
    {
        name:'CRM',
    },
    {
        name:'Data Analytics',
    },
    {
        name:'Data Transformation',
    },
    {
        name:'Healthcare IT',
    },
    {
        name:'IT Consulting',
    },
    {
        name:'IT Service Management',
    },
    {
        name:'IOT',
    },
    {
        name:'Information Security',
    },
    {
        name:'Mobile App development',
    },
    {
        name:'Organizational platforms',
    },
    {
        name:'Software development',
    },
    {
        name:'UI and UX Design',
    },
    {
        name:'Web Portals',
    },
]

const Blog = () => {
  return (
    <Portfolio>
    <BlogTitle>BLog &gt; Thought Leadership</BlogTitle>
    <br />
    <BlogName>Blog</BlogName>
    <br />
    <FiltersContainer>
    {FilterNamesList.map((eachItem) => (
        <FilterBox key={eachItem.uniqueNo} details={eachItem} />
      ))}
    </FiltersContainer>
    <br />

     <Paragraph>
        <Image></Image>
        <textSection>"Change by Design UI Portfolio" could be interpreted as a portfolio showcasing user interface designs
 that emphasize the concept of change driven by design principles.
 </textSection>
      </Paragraph>
    {/* </BlogPage> */}
    </Portfolio>
    
  )
}

export default Blog
