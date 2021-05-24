import { Component} from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {

  members: {topic: string, date: string, sender: string, text: string}[] = [
    {topic: 'przypomnienie', date: '12.05.2021r.', sender: 'Kuba', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet'},
    {topic: 'przypomnienie', date: '12.05.2021r.', sender: 'Kuba', text: 'ncvbcvb'},
  ];

}
