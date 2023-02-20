import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-first-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-first-project');
  });

  it(`should sum up two numbers'`, () => {
    //given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
     app.storeArray = ['5', '+', '1'];
    //when
    app.result();
    
    //then
    expect(app.num).toEqual(6)

  });
  it(`should substract two numbers'`, () => {
    //given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
     app.storeArray = ['5', '-', '1'];
    //when
    app.result();
    
    //then
    expect(app.num).toEqual(4)

  });

  it(`should multiplicate two numbers'`, () => {
    //given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
     app.storeArray = ['5', '*', '2'];
    //when
    app.result();
    
    //then
    expect(app.num).toEqual(10)

  });
  it(`should divide two numbers'`, () => {
    //given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
     app.storeArray = ['5', '/', '2'];
    //when
    app.result();
    
    //then
    expect(app.num).toEqual(2.5)

  });
  it(`should calculate number chain'`, () => {
    //given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
     app.storeArray = ['3', '+', '6', '*', '7', '-', '4', '/', '9', '+', '100', '/', '6'];
    //when
    app.result();
    
    //then
    expect(app.num).toEqual(17.75925925925926)

  });
  it(`should calculate number chain with dot'`, () => {
    //given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
     app.storeArray = ['3.6', '*', '5', '-', '3.7', '+', '8.66'];
    //when
    app.result();
    
    //then
    expect(app.num).toEqual(22.96)

  });












  it(`should give error'`, () => {
    //given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.storeArray = ['3', '+', '3', '+', '+', '5'];
    //when
    app.operatorCheck();
    
    //then
    expect(app.error).toEqual(true)

  });








});
