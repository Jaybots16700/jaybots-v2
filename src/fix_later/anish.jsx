import { Member } from '@/components/Member'
import { members } from '@/config'

import React from 'react'

var member = undefined;

for(var i = 0; i < members.length; i++){
  if(members[i].name === "Anish"){
    member = members[i]
  }
}

function Bio(){
  return(
    <>
      <p>
        I&apos;m an upcoming senior at John Jay High School & this is my 4th year of robotics. I focus on coding innovative solutions to complex problems, whether they are within robotics or my community at large. I have experience in a variety of languages including <b className='font-bold text-gray-200'>
          JavaScript
        </b>, <b className='font-bold text-gray-200'>
          Python
        </b>, <b className='font-bold text-gray-200'>
          Java
        </b>, and <b className='font-bold text-gray-200'>
          Kotlin
        </b>.
      </p>
      <p className='mt-4'>
        I&apos;m always up for new opportunities and would love to connect!
      </p>
    </>
  )
}

const links = [
  {name: "Discord", username: "@AnishDoesDev", copy: "AnishDoesDev"},
  {name: "LinkedIn", username: "@anish-anne", url: "https://www.linkedin.com/in/anish-anne/"},
  {name: "Email", username: "anish@jaybots.org", url: "mailto:anish@jaybots.org"}
]

class Anish extends React.Component{
  state = {}
  render() {
    return (
      <Member member={member} bio={Bio()} links={links} />
    )
  }
}

export default Anish