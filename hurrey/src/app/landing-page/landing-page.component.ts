import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  userName?: String;
  roomName?: string;
  noOfPlayers?: string;
  roomCode?: number;
  listOfOptions = [
    { imageDefault: '../../assets/selected_1.png', imageSelected: '../../assets/AdobeStock_488243549 [Converted] 1.png' },
    { imageDefault: '../../assets/selected_2.png', imageSelected: '../../assets/AdobeStock_488243549 [Converted] 2.png' },
    { imageDefault: '../../assets/selected_3.png', imageSelected: '../../assets/AdobeStock_488243549 [Converted] 3.png' },
    { imageDefault: '../../assets/selected_4.png', imageSelected: '../../assets/AdobeStock_488243549 [Converted] 4.png' },
    { imageDefault: '../../assets/selected_5.png', imageSelected: '../../assets/AdobeStock_488243549 [Converted] 5.png' }
  ]
  selectedAvatar: selectedAvatar | undefined;
  hideAndShowContainer?:{showLogo?:boolean,nameText?:boolean,avatar?:boolean,selction?:boolean,joinRoom?:boolean,createRoom?:boolean}



  ngOnInit() {
    this.hideAndShowContainer={showLogo:true}
    setTimeout(() => {
      this.showName();
    }, 2005);
  }

  // ngAfterViewInit(){
  //   document.getElementById('Inputfocus')?.focus()
  // }

  showName(){
    this.hideAndShowContainer={nameText:true,showLogo:false}
  }

  selectName() {
    if(this.userName)
    this.hideAndShowContainer={nameText:false,avatar:true}
  }

  chooseIcon(list: selectedAvatar, index: number) {
    this.selectedAvatar = {
      index: index,
      imageDefault: list.imageSelected,
      imageSelected: list.imageSelected,
    };
  }

  selectAvatar(){
    if(this.selectedAvatar)
    this.hideAndShowContainer={selction:true,avatar:false}
  }

  joinRoom(){
    this.hideAndShowContainer={selction:false,joinRoom:true}
  }

  createRoom(){
    this.hideAndShowContainer={createRoom:true,joinRoom:false}
  }

  back(){
    if(!this.hideAndShowContainer) return
   else if(this.hideAndShowContainer.avatar) {
    this.showName()
      return
    }
    else if(this.hideAndShowContainer.selction) {
      this.selectName();
      return
    }
    else if(this.hideAndShowContainer.joinRoom) {
      this.selectAvatar();
      return
    }
    else if(this.hideAndShowContainer.createRoom) {
      this.selectAvatar();
    }
   
  }

}

export interface selectedAvatar {
  imageDefault?: string, imageSelected?: string, index?: number
}
