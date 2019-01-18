import { Observable, of, Subject } from 'rxjs';
import { PersonTitle } from '../models/persontitle';

export class CommonService {
  public getTitles(): Observable<Array<PersonTitle>> {
    const subject: Subject<Array<PersonTitle>> = new Subject<Array<PersonTitle>>();
    const result: Observable<Array<PersonTitle>> = subject.asObservable();

    setTimeout(() => {
      const titles: Array<PersonTitle> = new Array<PersonTitle>();
      titles.push(new PersonTitle('Mr', 1));
      titles.push(new PersonTitle('Mrs', 2));
      titles.push(new PersonTitle('Miss', 3));

      subject.next(titles);
    }, 2000);

    return result;
  }
}
