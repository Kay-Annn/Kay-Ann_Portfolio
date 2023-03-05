import React, { Component } from 'react'

import CV from 'react-cv'

class Resume extends Component {
  render () {
    return (
      <CV
        personalData={{
          name: 'Kay-Ann Williams',
          title: 'Full Stack Software Developer',
          
          contacts: [
            { type: 'email', value: 'williams.kayann@yahoo.com' },
            { type: 'location', value: 'Toronto' },
            { type: 'linkedin', value: 'https://www.linkedin.com/in/kay-ann-williams' },
            { type: 'twitter', value: 'https://twitter.com/kaykoding' },
            { type: 'github', value: 'https://github.com/Kay-Annn' }
        ]}}


        sections= {[{
          type: 'text',
          title: 'Career Profile',
          content: 'I have made the switch from healthcare to technology. Technology gives me the opportunity to use my creativity and constantly work on self improvement. I spent six years in healthcare and now I am ready to take the tech field by storm.',
          icon: 'usertie'
        }, 
    
        {
            type: 'String',
            title: 'Education',
            icon: 'graduation',
            description: 'Full Stack Web Development',
            groups: [{ 
      sectionHeader: 'University of Toronto',
      description: 'Optional',
      items: [
        { title: 'Project', projectUrl: 'optional', description: 'Optional' },
      ]
    }
  ]    
          },
          {
            type: 'text',
            title: 'Experience',
            content: 'I have made the switch from healthcare to technology. ',
            icon: 'usertie'
          },

          {
            type: 'text',
            title: 'Skills',
            content: 'When I was child, I always want to be a developer.',
            icon: 'usertie'
          },
              
    ]}    
        branding={false} // or false to hide it.
      />
    )
  }
}

export default Resume;