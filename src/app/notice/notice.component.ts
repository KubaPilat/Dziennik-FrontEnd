import { Component} from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {

  // pola po angielsku 
  members: {temat: string, data: string, nadawca: string, text: string}[] = [
    {temat: 'przypomnienie', data: '12.05.2021r.', nadawca: 'Kuba', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet'},
    {temat: 'przypomnienie', data: '12.05.2021r.', nadawca: 'Kuba', text: 'ncvbcvb'},
    {temat: 'przypomnienie', data: '12.05.2021r.', nadawca: 'Kuba', text: 'ncvbcvb'},
    {temat: 'przypomnienie', data: '12.05.2021r.', nadawca: 'Kuba', text: 'ncvbcvb'},
    {temat: 'przypomnienie', data: '12.05.2021r.', nadawca: 'Kuba', text: 'ncvbcvb'},
    {temat: 'przypomnienie', data: '12.05.2021r.', nadawca: 'Kuba', text: 'ncvbcvb'},
    {temat: 'przypomnienie', data: '12.05.2021r.', nadawca: 'Kuba', text: 'ncvbcvb'},
  ];

}
