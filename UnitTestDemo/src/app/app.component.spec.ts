import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UnitTestDemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('UnitTestDemo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    //const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('.content span').textContent).toContain('UnitTestDemo app is running!');
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('UnitTestDemo');
    
  });

  it('name must be keyur', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const name = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(name.innerHTML).toBe("krishna");
  })

  it('check reverce method',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const revName = app.getReverseName('keyur');    
    expect("ruyek").toEqual(revName);
  })
});
