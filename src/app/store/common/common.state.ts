import { PersonTitle } from '../../common/models/persontitle';

export interface CommonState {
  titles: Array<PersonTitle>;
}

export const initialCommonState: CommonState = {
  titles: []
};
