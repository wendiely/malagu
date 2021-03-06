import { Component } from '../annotation';
import { ContextInitializer, ExpressionContext } from './expression-protocol';

@Component(ContextInitializer)
export class CoreContextInitializer implements ContextInitializer {

    initialize(ctx: ExpressionContext): void {
        ctx.env = { ...process.env, _ignoreEl: true };
    }

    priority = 500;

}
