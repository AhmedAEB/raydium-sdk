import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import BN from 'bn.js';
export declare function createPoolInstruction(programId: PublicKey, poolId: PublicKey, poolCreator: PublicKey, ammConfigId: PublicKey, observationId: PublicKey, mintA: PublicKey, mintVaultA: PublicKey, mintProgramIdA: PublicKey, mintB: PublicKey, mintVaultB: PublicKey, mintProgramIdB: PublicKey, exTickArrayBitmap: PublicKey, sqrtPriceX64: BN, startTime: BN): TransactionInstruction;
export declare function openPositionFromLiquidityInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, positionNftOwner: PublicKey, positionNftMint: PublicKey, positionNftAccount: PublicKey, metadataAccount: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, personalPosition: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, tokenVaultA: PublicKey, tokenVaultB: PublicKey, tokenMintA: PublicKey, tokenMintB: PublicKey, tickLowerIndex: number, tickUpperIndex: number, tickArrayLowerStartIndex: number, tickArrayUpperStartIndex: number, liquidity: BN, amountMaxA: BN, amountMaxB: BN, withMetadata: 'create' | 'no-create', exTickArrayBitmap?: PublicKey): TransactionInstruction;
export declare function openPositionFromBaseInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, positionNftOwner: PublicKey, positionNftMint: PublicKey, positionNftAccount: PublicKey, metadataAccount: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, personalPosition: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, tokenVaultA: PublicKey, tokenVaultB: PublicKey, tokenMintA: PublicKey, tokenMintB: PublicKey, tickLowerIndex: number, tickUpperIndex: number, tickArrayLowerStartIndex: number, tickArrayUpperStartIndex: number, withMetadata: 'create' | 'no-create', base: 'MintA' | 'MintB', baseAmount: BN, otherAmountMax: BN, exTickArrayBitmap?: PublicKey): TransactionInstruction;
export declare function closePositionInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftMint: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey): TransactionInstruction;
export declare function increasePositionFromLiquidityInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey, poolId: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, mintVaultA: PublicKey, mintVaultB: PublicKey, mintMintA: PublicKey, mintMintB: PublicKey, liquidity: BN, amountMaxA: BN, amountMaxB: BN, exTickArrayBitmap?: PublicKey): TransactionInstruction;
export declare function increasePositionFromBaseInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey, poolId: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, mintVaultA: PublicKey, mintVaultB: PublicKey, mintMintA: PublicKey, mintMintB: PublicKey, base: 'MintA' | 'MintB', baseAmount: BN, otherAmountMax: BN, exTickArrayBitmap?: PublicKey): TransactionInstruction;
export declare function decreaseLiquidityInstruction(programId: PublicKey, positionNftOwner: PublicKey, positionNftAccount: PublicKey, personalPosition: PublicKey, poolId: PublicKey, protocolPosition: PublicKey, tickArrayLower: PublicKey, tickArrayUpper: PublicKey, ownerTokenAccountA: PublicKey, ownerTokenAccountB: PublicKey, mintVaultA: PublicKey, mintVaultB: PublicKey, mintMintA: PublicKey, mintMintB: PublicKey, rewardAccounts: {
    poolRewardVault: PublicKey;
    ownerRewardVault: PublicKey;
    rewardMint: PublicKey;
}[], liquidity: BN, amountMinA: BN, amountMinB: BN, exTickArrayBitmap?: PublicKey): TransactionInstruction;
export declare function swapInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, ammConfigId: PublicKey, inputTokenAccount: PublicKey, outputTokenAccount: PublicKey, inputVault: PublicKey, outputVault: PublicKey, inputMint: PublicKey, outputMint: PublicKey, tickArray: PublicKey[], observationId: PublicKey, amount: BN, otherAmountThreshold: BN, sqrtPriceLimitX64: BN, isBaseInput: boolean, exTickArrayBitmap?: PublicKey): TransactionInstruction;
export declare function initRewardInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, operationId: PublicKey, ammConfigId: PublicKey, ownerTokenAccount: PublicKey, rewardProgramId: PublicKey, rewardMint: PublicKey, rewardVault: PublicKey, openTime: number, endTime: number, emissionsPerSecondX64: BN): TransactionInstruction;
export declare function setRewardInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, operationId: PublicKey, ammConfigId: PublicKey, ownerTokenAccount: PublicKey, rewardVault: PublicKey, rewardMint: PublicKey, rewardIndex: number, openTime: number, endTime: number, emissionsPerSecondX64: BN): TransactionInstruction;
export declare function collectRewardInstruction(programId: PublicKey, payer: PublicKey, poolId: PublicKey, ownerTokenAccount: PublicKey, rewardVault: PublicKey, rewardMint: PublicKey, rewardIndex: number): TransactionInstruction;
//# sourceMappingURL=instrument.d.ts.map