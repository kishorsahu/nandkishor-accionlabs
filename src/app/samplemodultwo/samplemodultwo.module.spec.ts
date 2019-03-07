import { SamplemodultwoModule } from './samplemodultwo.module';

describe('SamplemodultwoModule', () => {
  let samplemodultwoModule: SamplemodultwoModule;

  beforeEach(() => {
    samplemodultwoModule = new SamplemodultwoModule();
  });

  it('should create an instance', () => {
    expect(samplemodultwoModule).toBeTruthy();
  });
});
