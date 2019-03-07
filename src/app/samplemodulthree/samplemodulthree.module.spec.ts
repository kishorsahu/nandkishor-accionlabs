import { SamplemodulthreeModule } from './samplemodulthree.module';

describe('SamplemodulthreeModule', () => {
  let samplemodulthreeModule: SamplemodulthreeModule;

  beforeEach(() => {
    samplemodulthreeModule = new SamplemodulthreeModule();
  });

  it('should create an instance', () => {
    expect(samplemodulthreeModule).toBeTruthy();
  });
});
