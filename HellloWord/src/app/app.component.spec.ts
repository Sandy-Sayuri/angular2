import { TestBed } from '@angular/core/testing';;
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({

    }).compileComponents();
  });

  it(`should have as title 'HellloWord'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HellloWord');
  });
});
