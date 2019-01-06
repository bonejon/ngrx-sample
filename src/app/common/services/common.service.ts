import { Observable, of } from 'rxjs';
import { PersonTitle } from '../models/persontitle';

export class CommonService {
    public getTitles(): Observable<Array<PersonTitle>> {
        const titles: Array<PersonTitle> = new Array<PersonTitle>();
        titles.push(new PersonTitle('Mr', 1));
        titles.push(new PersonTitle('Mrs', 2));
        titles.push(new PersonTitle('Miss', 3));

        return of(titles);
    }
}
