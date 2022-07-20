import React, {Component} from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import './Welcome.css';
import List from '../../components/list/List';
import Input from '../../components/input/Input';

class Welcome extends Component {
  
    constructor(props){
      super(props);
      this.state = {sectionData:props.sectionData}
      this.filterList = this.filterList.bind(this);
    }
  
    filterList(value){
  
      let data = null;
  
      if(value){
        data = this.state.sectionData.filter( 
         (user)=>{
              return user.autor.includes(value);
            }
        ) 
   
      }else{
       data = this.props.sectionData;
      }
  
      this.setState({sectionData: data});
  
    }
  
    render() { 
      
      const {title} = this.props;
      
      const {sectionData} = this.state;
  
      const sectionClassSearch = 'SectionSearch';
      
      const sectionClassData = 'SectionData';
  
      const inputLabel='Busca';
  
      return (
          <div className="Welcome">
            <Header title={title}></Header>
            <Section className={sectionClassSearch}> <Input label={inputLabel} callback={this.filterList} /></Section>
            <Section className={sectionClassData}> <List data={sectionData}/> </Section>
          </div>
        );
        
    }
  
  }
  
  export default Welcome;