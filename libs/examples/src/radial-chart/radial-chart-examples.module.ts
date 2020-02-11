/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtRadialChartModule } from '@dynatrace/barista-components/radial-chart';
import { DtExampleRadialChartCustomColors } from './radial-chart-custom-colors-example/radial-chart-custom-colors-example';
import { DtExampleRadialChartDefaultDonut } from './radial-chart-default-donut-example/radial-chart-default-donut-example';
import { RadialChartDefaultDonutExample } from './radial-chart-default-pie-example/radial-chart-default-pie-example';
import { DtExampleRadialChartMaxValue } from './radial-chart-max-value-example/radial-chart-max-value-example';

export const DT_RADIAL_CHART_EXAMPLES = [
  DtExampleRadialChartCustomColors,
  DtExampleRadialChartDefaultDonut,
  RadialChartDefaultDonutExample,
  DtExampleRadialChartMaxValue,
];

@NgModule({
  imports: [CommonModule, DtRadialChartModule],
  declarations: [...DT_RADIAL_CHART_EXAMPLES],
  entryComponents: [...DT_RADIAL_CHART_EXAMPLES],
})
export class DtRadialChartExamplesModule {}