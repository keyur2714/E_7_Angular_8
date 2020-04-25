import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  afterEach(()=>{})

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });
  it('check add method is present', ()=>{
    const service: TestService = TestBed.get(TestService);
    expect(service.add).toBeTruthy();
  })
  it('check add method works fine or not', ()=>{
    const service: TestService = TestBed.get(TestService);
    expect(service.add(7,8)).toEqual(15);
  })
  it('check mul method is present', ()=>{
    const service : TestService = TestBed.get(TestService);
    let result = service.mul(17,5);
    expect(85).toEqual(result);
  })
});
