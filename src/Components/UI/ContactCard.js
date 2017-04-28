/**
 * Created by DAVIM on 28/04/2017.
 */
import React,{Component} from 'react';
import DOMPurify from 'dompurify';
import DefaultImage from '../../Images/Profile.png';

let contactList = {
    david: {
        name: 'David Maser',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        title: 'Consultant',
        expertise: ['JavaScript', 'jQuery', 'ReactJS'],
        comment: 'Hello my name is'
    },
    jim: {
        name: 'David Maser',
        image: '',
        title: 'Consultant',
        expertise: ['JavaScript', 'jQuery', 'ReactJS'],
        comment: ''
    }
};

let contactCartTemplate = '<div class="contact-card">' +
    '<div class="contact-pic">' +
    '<img class="contact" src="{-image-}" />' +
    '</div>' +
    '<div class="contact-bio"><h1>{-name-}</h1><h3>{-title-}</h3><p>{-comment-}</p></div>' +
    '</div>';

class ContactCard extends Component{
    constructor(props){
        super(props);
        this.state={
            who:this.props.name
        }
    }

    buildCardLayout(){
        let itemNode = this.state.who;
        let itemObject = contactList[itemNode];
        let cardArray = [];
        let contactString = contactCartTemplate;
        for(let i in itemObject){
            if(i === 'image'){
                if(itemObject[i] === ''){
                    contactString = contactString.replace('{-'+i+'-}',DefaultImage)
                }else{
                    contactString = contactString.replace('{-'+i+'-}',itemObject[i])
                }
            }else{
                contactString = contactString.replace('{-'+i+'-}',itemObject[i])
            }
        }
        cardArray.push(contactString);

        return(
            cardArray
        )
    }

    render(){
        let renderObject = DOMPurify.sanitize(this.buildCardLayout());
        renderObject = renderObject.replace(',',''); //dirty fix
        return(
            <div className="component-card-wrapper" dangerouslySetInnerHTML={{__html: renderObject}} />
        )

    }
}

export default ContactCard;