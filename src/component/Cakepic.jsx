import { useState } from "react"

const Cakepic = () => {

    const [selectedOption, setSelectedOption] = useState("");
    
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const renderDetails = () => {
        switch (selectedOption) {
          case "0.5kg":
            return <div className='togimg'>
            <img src="https://imgs.search.brave.com/e2QjOlxhaY4YwRuGO49uhWYJlefJvufJUTaplvxkkwY/rs:fit:1200:1200:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly1SNkhnR0FQWjh2/VS9WRjJONUJieVF2/SS9BQUFBQUFBQUNt/VS9uVTNYblhQZVBI/QS9zMTYwMC9IYXBw/eS1CaXJ0aGRheS1D/aG9jb2xhdGUtQ2Fr/ZS1JbWFnZS1IRC1X/aWRlLmpwZw" alt="" srcset="" />
            </div>;
          case "1kg":
            return <div className='togimg'>
               <img src="https://imgs.search.brave.com/a85psxGNQlhRqkgf_1uCiUK0dQK-QgYqUMdD_KhspD8/rs:fit:735:867:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9lZS80ZS9mZC9l/ZTRlZmQwZDk2MGI0/NzdlNGRjMDM3M2My/ODM3ZjdhMi5qcGc" alt="" srcset="" />
            </div>;
          case "2kg":
            return <div className='togimg'>
              <img src="https://imgs.search.brave.com/1wGLSEClAmSiZA08-ll8NBhoTblCnIRx39j-M9fBz88/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS8z/T3dKRFlDeGQ5US9t/YXhyZXNkZWZhdWx0/LmpwZw" alt="" srcset="" />
            </div>;
          default:
            return <div className='togimg'>
              <img src="https://imgs.search.brave.com/e2QjOlxhaY4YwRuGO49uhWYJlefJvufJUTaplvxkkwY/rs:fit:1200:1200:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly1SNkhnR0FQWjh2/VS9WRjJONUJieVF2/SS9BQUFBQUFBQUNt/VS9uVTNYblhQZVBI/QS9zMTYwMC9IYXBw/eS1CaXJ0aGRheS1D/aG9jb2xhdGUtQ2Fr/ZS1JbWFnZS1IRC1X/aWRlLmpwZw" alt="" srcset="" />
            
            </div>;
        }
      };
  return (
    <div className='maincake'>
        <div className="cakepics">
        <label
       
        >
          <input
          style={{
            display:'none'
            
          }}
            type="radio"
            value="0.5kg"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
                    <img src="https://imgs.search.brave.com/e2QjOlxhaY4YwRuGO49uhWYJlefJvufJUTaplvxkkwY/rs:fit:1200:1200:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly1SNkhnR0FQWjh2/VS9WRjJONUJieVF2/SS9BQUFBQUFBQUNt/VS9uVTNYblhQZVBI/QS9zMTYwMC9IYXBw/eS1CaXJ0aGRheS1D/aG9jb2xhdGUtQ2Fr/ZS1JbWFnZS1IRC1X/aWRlLmpwZw" alt="" srcset="" />

        </label>        
        
        <label
         
        >
          <input
           style={{
            display:'none'
            
          }}
            type="radio"
            value="1kg"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
        <img src="https://imgs.search.brave.com/a85psxGNQlhRqkgf_1uCiUK0dQK-QgYqUMdD_KhspD8/rs:fit:735:867:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9lZS80ZS9mZC9l/ZTRlZmQwZDk2MGI0/NzdlNGRjMDM3M2My/ODM3ZjdhMi5qcGc" alt="" srcset="" />
        </label>         
        
        <label
        
        >
          <input
           style={{
            display:'none'
            
          }}
            type="radio"
            value="2kg"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
                    <img src="https://imgs.search.brave.com/1wGLSEClAmSiZA08-ll8NBhoTblCnIRx39j-M9fBz88/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS8z/T3dKRFlDeGQ5US9t/YXhyZXNkZWZhdWx0/LmpwZw" alt="" srcset="" />

        </label>
          </div>
       <div className="func">
       {renderDetails()}
       </div>
    </div>
  )
}

export default Cakepic