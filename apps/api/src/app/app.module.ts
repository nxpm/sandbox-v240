import { ApiFeatureAuthModule } from '@sandbox-v240/api/feature-auth'
import { ApiFeatureCoreModule } from '@sandbox-v240/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
